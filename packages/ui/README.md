# 📦 eslint-config-hystax-ui

Shared **UI** ESLint configuration for **Hystax** projects

This package provides a shared ESLint configuration used across Hystax repositories — ready to use and easy to customize.

---

## ⚙️ Requirements

- Node.js: ≥ 18
- ESLint: ≥ 9

---

## 🚀 Installation
```bash
npm install -D eslint-config-hystax-ui
```

---

## ⚙️ Usage

In your project’s _eslint.config.mjs_, import and use the shared configuration.

Basic example (UI project)
```javascript
import config from "eslint-config-hystax-ui";
export default config;
```

You can also use an array form if you plan to combine multiple configs:

```javascript
import config from "eslint-config-hystax-ui";
export default [config];
```

### 🧩 Override file globs or rules
```javascript
import config from "eslint-config-hystax-ui";
export default [
  {
    ...config,
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      ...config.rules,
      "no-console": "warn"
    }
  }
];
```

---

## 📝 Notes

- ESLint flat config format (v9) is used — no "_extends_" field needed.

- Works with React, TypeScript, and Prettier.

- Designed for consistency across all Hystax frontend projects.

---

## 📄 License

[Apache License Version 2.0](https://choosealicense.com/licenses/apache-2.0/)