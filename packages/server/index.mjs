import nodePlugin from "eslint-plugin-node";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";

import baseRules from "./rules/base.mjs";
import nodeRules from "./rules/node.mjs";
import importsRules from "./rules/imports.mjs";
import prettierRules from "./rules/prettier.mjs";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/.next/**",
      "**/.out/**",
      "**/.turbo/**",
      "**/.cache/**",
      "**/.parcel-cache/**",
      "**/.vite/**",
      "**/coverage/**",
      "**/tmp/**",
      "**/temp/**",
    ],
  },
  {
    files: ["**/*.ts"],

    plugins: {
      node: nodePlugin,
      import: eslintPluginImport,
      "unused-imports": unusedImportsPlugin,
      "@typescript-eslint": typescriptPlugin,
      prettier: eslintPluginPrettier,
    },

    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.node,
        ...globals.builtin,
        ...globals.jest,
        vi: true,
      },
    },

    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".cjs", ".mjs", ".ts"],
          moduleDirectory: ["node_modules", "src/"],
        },
      },
      "import/ignore": ["node_modules"],
    },

    rules: {
      ...baseRules,
      ...nodeRules,
      ...importsRules,
      ...prettierRules,
    },
  },
];
