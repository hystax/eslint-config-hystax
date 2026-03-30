# 📦 @hystax/eslint-config-ui

Shared **UI** ESLint configuration for **Hystax** projects

This package provides a shared ESLint configuration used across Hystax repositories — ready to use and easy to customize.

## ⚙️ Requirements

- Node.js: ≥ 22
- ESLint: ≥ 9

## 🚀 Installation

```bash
npm install -D @hystax/eslint-config-ui
```

## ⚙️ Usage

In your project’s _eslint.config.mjs_, import and use the shared configuration.

Basic example (UI project)

```javascript
import config from "@hystax/eslint-config-ui";

// The config is an array; the first element contains global ignore
export default config;
```

### 🧩 Combining with other configs or local overrides

```javascript
import config from "@hystax/eslint-config-ui";
export default [
  ...config,
  {
    // Add or override rules here
    rules: {
      "no-console": "warn",
      "import/order": [
        "error",
        { groups: ["builtin", "external", "internal"] },
      ],
    },
  },
];
```

### 🧩 Add or override global ignores

```javascript
import config from "@hystax/eslint-config-ui";

const globalIgnores = config[0];
const configRules = config.slice(1);

export default [
  {
    // Extend existing global ignores or override them
    ...globalIgnores,
    ignores: [...(globalIgnores.ignores || []), "./dist"],
  },
  ...configRules,
];
```

## 📝 Notes

- ESLint flat config format (v9) is used — no "_extends_" field needed.

- Works with React, TypeScript, and Prettier.

- Designed for consistency across all Hystax frontend projects.

- The first element of the exported array contains global ignores, so it’s important to spread the array if adding additional rules.

## 📄 License

[Apache License Version 2.0](https://choosealicense.com/licenses/apache-2.0/)
