# 📦 @hystax/eslint-config

Shared ESLint configurations for **Hystax** projects.

This monorepo contains multiple ESLint configuration packages for different project types (UI, server, etc.), built using the **ESLint Flat Config** format (v9).  
The goal is to provide consistent linting rules across all Hystax projects.

## 🧱 Packages

| Package                                       | Description                                                     |
|-----------------------------------------------|-----------------------------------------------------------------|
| [`@hystax/eslint-config-ui`](./packages/ui)    | Shared ESLint config for **frontend/React/TypeScript** projects |
| *(coming soon)* `@hystax/eslint-config-server` | ESLint config for **Node.js / backend** projects                |
| *(coming soon)* `@hystax/eslint-config-base`   | Base rules for all Hystax projects                              |

> Each package can be installed and used independently.

## ⚙️ Usage

Install the desired package in your project:

```bash
npm install -D @hystax/eslint-config-ui
```

For details on usage, overriding rules, or customizing file globs, see the [`@hystax/eslint-config-ui` README](./packages/ui/README.md).

## 🧪 Development & Testing

These commands are for contributors and maintainers to verify that all ESLint configs load correctly:

#### Run tests for all packages
```bash
npm test
```

#### Run tests for a specific package
```bash
npm run test --workspace=@hystax/eslint-config-ui
```

## 📄 License

[Apache License Version 2.0](https://choosealicense.com/licenses/apache-2.0/)
