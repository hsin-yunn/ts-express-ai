import globals from "globals";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...prettier.rules,
      "prettier/prettier": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-var": "error",
      "@typescript-eslint/no-unused-vars": ["error"],
      "func-style": ["error", "declaration", { allowArrowFunctions: true }],
      "no-restricted-syntax": [
        "error",
        {
          selector: "FunctionExpression",
          message: "請使用函式宣告式或箭頭函式，避免使用一般函式表達式 😎",
        },
      ],
      "no-undef": "off",
    },
  },
  {
    files: ["**/*.test.ts", "**/__tests__/**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
