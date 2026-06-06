import iobrokerConfig from "@iobroker/eslint-config/eslint.config.mjs";

export default [
  ...iobrokerConfig,
  {
    languageOptions: {
      globals: {
        Blockly: "readonly",
        systemLang: "readonly",
        systemDictionary: "writable",
        main: "readonly",
        systemConfig: "readonly",
        _: "readonly",
        M: "readonly",
        sendTo: "readonly",
        instance: "readonly",
        onChange: "readonly",
      },
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-redeclare": "off",
    },
  },
  {
    files: ["admin/*.js"],
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        MutationObserver: "readonly",
        requestAnimationFrame: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    files: ["test/**/*.js"],
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        beforeEach: "readonly",
        after: "readonly",
        afterEach: "readonly",
      },
    },
  },
  {
    ignores: ["node_modules/", "admin/i18n/", ".vscode/"],
  },
];
