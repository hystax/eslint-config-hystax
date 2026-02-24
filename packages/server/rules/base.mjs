import js from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

export default {
  ...js.configs.recommended.rules,
  ...typescriptPlugin.configs.recommended.rules,

  "no-shadow": "off",

  "@typescript-eslint/no-empty-function": "off",
  "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
  "@typescript-eslint/no-use-before-define": [
    "error",
    { functions: true, classes: true, variables: true },
  ],
  "@typescript-eslint/no-shadow": ["error", { hoist: "functions", allow: [] }],
  "@typescript-eslint/ban-ts-comment": "off",
  "@typescript-eslint/no-explicit-any": "off",
};
