import eslintPluginImport from "eslint-plugin-import";

export default {
    ...eslintPluginImport.flatConfigs.recommended.rules,

    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before"
          }
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        },
        "newlines-between": "never"
      }
    ],
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "unused-imports/no-unused-imports": "warn",
  }