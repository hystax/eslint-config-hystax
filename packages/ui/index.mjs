import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";

import baseRules from "./rules/base.mjs";
import reactRules from "./rules/react.mjs";
import importsRules from "./rules/imports.mjs";
import prettierRules from "./rules/prettier.mjs";

export default {
  ignores: [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/.next/**",
    "**/stories/**"
  ],
  
  files: ["src/**/*.{ts,tsx}"],

  plugins: {
    react: reactPlugin,
    "react-hooks": reactHooksPlugin,
    "@typescript-eslint": typescriptPlugin,
    import: eslintPluginImport,
    "unused-imports": unusedImportsPlugin,
    prettier: eslintPluginPrettier
  },

  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      ...globals.browser,
      ...globals.builtin,
      ...globals.jest,
      vi: true
    }
  },

  settings: {
    react: { version: "detect" },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"]
      },
    },
    "import/ignore": ["node_modules"]
  },

  rules: {
    ...baseRules,
    ...reactRules,
    ...importsRules,
    ...prettierRules,
  }
};

