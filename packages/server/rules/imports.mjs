import eslintPluginImport from "eslint-plugin-import";

export default {
  ...eslintPluginImport.flatConfigs.recommended.rules,

  "import/no-unresolved": "off",
  "import/order": [
    "warn",
    {
      groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
      "newlines-between": "never",
    },
  ],

  "import/no-extraneous-dependencies": "warn",
  "import/prefer-default-export": "off",
  "unused-imports/no-unused-imports": "warn",
};
