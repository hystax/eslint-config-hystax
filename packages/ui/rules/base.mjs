import js from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";

export default {
  ...js.configs.recommended.rules,
  ...typescriptPlugin.configs.recommended.rules,

  "class-methods-use-this": "error",
  "no-param-reassign": [
    "error", { props: true, ignorePropertyModificationsFor: ["acc", "accumulator", "ctx"] }
  ],
  "no-underscore-dangle": [
    "error", { allowAfterThis: true, allowAfterThisConstructor: true }
  ],
  "comma-dangle": ["warn", { arrays: "never", objects: "never" }],
  "jsx-quotes": "warn",
  "no-multi-spaces": "warn",
  "no-const-assign": "warn",
  "constructor-super": "warn",
  "valid-typeof": "warn",
  "no-extra-semi": "warn",
  "no-this-before-super": "warn",
  "no-undef": "warn",
  "no-unreachable": "warn",
  "max-params": ["warn", 3],
  "no-bitwise": "off",
  "no-console": "off",
  "default-param-last": "off",
  "arrow-body-style": ["warn", "as-needed"],
  "@typescript-eslint/ban-ts-comment": "off",
  "@typescript-eslint/no-empty-function": "off",
  "@typescript-eslint/no-unused-vars": ["error", { ignoreRestSiblings: true }],
}