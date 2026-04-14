# ioBroker.ntfy-client Copilot Instructions

Version: adapted from DrozmotiX/ioBroker-Copilot-Instructions
Template Version: 0.5.7
Template Source: https://github.com/DrozmotiX/ioBroker-Copilot-Instructions

These instructions guide GitHub Copilot when working in this repository.

## Project Context

- This is an ioBroker adapter named `ntfy-client`.
- Runtime code lives in `main.js` (CommonJS style, not ESM).
- Admin UI configuration is JSON-Config based in `admin/jsonConfig.json`.
- Blockly support is implemented in `admin/blockly.js`.
- Translation files are in `admin/i18n/*.json`.

## Required Local Validation

Run checks in this order before finalizing changes:

1. `npm run lint`
2. `npm run test:package`
3. `npm run test:integration`

If a task only changes docs, mention that tests were not necessary.

## Coding Guidelines

- Keep existing module style (CommonJS `require`, `module.exports`) unless migration is explicitly requested.
- Respect Node.js `>=20` from `package.json`.
- Prefer small, focused changes and preserve existing behavior.
- Do not log secrets (`pass`, `token`, Authorization headers).
- Keep existing log style (`this.log.debug/info/warn/error`) and avoid `console.log` in adapter runtime code.
- Ensure resources are cleaned up in unload paths (timers, intervals, SSE/EventSource subscriptions).

## ioBroker Specific Rules

- Keep `io-package.json` and `package.json` versions and metadata consistent when doing release-relevant changes.
- Preserve and update `common.news` entries in `io-package.json` for user-visible changes.
- Keep states/object definitions compatible with ioBroker conventions (roles, read/write flags, defaults).
- Do not remove encryption/protection for sensitive native fields (`pass`, `token`).

## Admin UI and Translations

- When changing labels, help texts, or config fields in `admin/jsonConfig.json`, update translation keys in all files under `admin/i18n/`.
- Do not leave orphaned translation keys.
- Keep wording clear and consistent across languages.

## Testing Guidance

- Use `@iobroker/testing` harness-based tests.
- Keep package validation tests in `test/package/` and integration behavior tests in `test/integration/`.
- Prefer deterministic tests and avoid dependence on external network availability.

## Documentation Guidance

- Update `README.md` for user-visible feature or configuration changes.
- Keep examples in README aligned with actual `sendTo` commands and supported parameters.
- If behavior changes, document migration or compatibility notes clearly.

## Pull Request Checklist

- Lint passes.
- Package and integration tests pass.
- README updated if needed.
- `io-package.json` news/version reviewed for release-relevant changes.
- No secrets or credentials in code, logs, tests, or docs.
