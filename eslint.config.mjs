import config from '@iobroker/eslint-config';

export default [
    ...config,
    {
        rules: {
            'jsdoc/reject-any-type': 'off',
        },
    },
    {
        files: ['admin/*.js'],
        languageOptions: {
            globals: {
                Blockly: 'readonly',
                systemLang: 'readonly',
                systemDictionary: 'writable',
                main: 'readonly',
                systemConfig: 'readonly',
                _: 'readonly',
                M: 'readonly',
                sendTo: 'readonly',
                instance: 'readonly',
                onChange: 'readonly',
                window: 'readonly',
                document: 'readonly',
                MutationObserver: 'readonly',
                requestAnimationFrame: 'readonly',
            },
        },
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
        },
    },
    {
        files: ['test/**/*.js'],
        languageOptions: {
            globals: {
                describe: 'readonly',
                it: 'readonly',
                before: 'readonly',
                beforeEach: 'readonly',
                after: 'readonly',
                afterEach: 'readonly',
            },
        },
    },
];
