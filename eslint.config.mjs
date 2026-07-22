import pluginSecurity from "eslint-plugin-security";
import reactPlugin from "eslint-plugin-react";
import jestPlugin from "eslint-plugin-jest";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import babelParser from "@babel/eslint-parser";

export default [
  {
    ignores: [
      "node_modules/**",
      "build/**",
      "coverage/**",
      "reports/**",
    ],
  },

  {
    files: ["**/*.{js,jsx}"],

    languageOptions: {
      parser: babelParser,

      parserOptions: {
        requireConfigFile: false,
        sourceType: "module",

        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },

    plugins: {
      react: reactPlugin,
      security: pluginSecurity,
    },

    rules: {
  ...reactPlugin.configs.recommended.rules,
  "react/react-in-jsx-scope": "off",
  "security/detect-eval-with-expression": "error",

    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },

  {
    files: [
      "**/*.test.{js,jsx}",
      "**/*.spec.{js,jsx}",
      "**/__tests__/**/*.{js,jsx}",
    ],

    plugins: {
      jest: jestPlugin,
      "testing-library": testingLibraryPlugin,
    },

    rules: {
      ...jestPlugin.configs.recommended.rules,
      ...testingLibraryPlugin.configs.react.rules,
      "testing-library/await-async-events": "off",
    },

    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
        it: "readonly",
        jest: "readonly",
      },
    },
  },
];
