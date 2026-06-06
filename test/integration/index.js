const path = require('node:path');
const assert = require('node:assert/strict');
const { tests } = require('@iobroker/testing');

// Run integration tests - assertions are provided with a mocked adapter
tests.integration(path.join(__dirname, '..', '..'), {
    defineAdditionalTests({ suite }) {
        /**
         * @param {any} harness Test harness
         * @param {string} target Target adapter instance
         * @param {string} command Command name
         * @param {any} message Message payload
         * @param {number} [timeoutMs] Timeout for callback
         * @returns {Promise<any>} Callback response
         */
        function sendToAsync(harness, target, command, message, timeoutMs = 15000) {
            return new Promise((resolve, reject) => {
                const timeout = setTimeout(() => {
                    reject(new Error(`sendTo timeout for command "${command}"`));
                }, timeoutMs);

                harness.sendTo(target, command, message, response => {
                    clearTimeout(timeout);
                    resolve(response);
                });
            });
        }

        suite('Startup hardening', getHarness => {
            let harness;

            before(() => {
                harness = getHarness();
            });

            it('starts with malformed topic entries without crashing', async function () {
                this.timeout(90000);

                await harness.changeAdapterConfig('ntfy-client', {
                    native: {
                        topics: [
                            null,
                            {
                                displayName: 'Only display name',
                            },
                            {
                                topic: '',
                            },
                            {
                                topic: 'valid_topic',
                                displayName: 'Valid Topic',
                            },
                            'plain_topic',
                        ],
                    },
                });

                await harness.startAdapterAndWait(true);

                assert.equal(harness.isAdapterRunning(), true);
                const aliveState = await harness.states.getStateAsync('system.adapter.ntfy-client.0.alive');
                assert.equal(aliveState && aliveState.val, true);
            });
        });

        suite('sendTo hardening', getHarness => {
            let harness;

            before(() => {
                harness = getHarness();
            });

            it('returns callback errors for invalid send and dismiss payloads and keeps adapter alive', async function () {
                this.timeout(90000);

                await harness.changeAdapterConfig('ntfy-client', {
                    native: {
                        defaultTopic: '',
                    },
                });

                await harness.startAdapterAndWait(true);

                const response = await sendToAsync(harness, 'ntfy-client.0', 'send', null);

                assert.equal(typeof response, 'object');
                assert.ok(response && typeof response.error === 'string');
                assert.match(response.error, /Topic is required/i);
                assert.equal(harness.isAdapterRunning(), true);

                const dismissResponse = await sendToAsync(harness, 'ntfy-client.0', 'dismiss', {
                    topic: 'fallback_topic',
                });

                assert.equal(typeof dismissResponse, 'object');
                assert.ok(dismissResponse && typeof dismissResponse.error === 'string');
                assert.match(dismissResponse.error, /sequence_id is required/i);
                assert.equal(harness.isAdapterRunning(), true);
            });
        });
    },
});
