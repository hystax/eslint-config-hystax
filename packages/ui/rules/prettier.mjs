import eslintConfigPrettier from "eslint-config-prettier";

  export default {
    ...eslintConfigPrettier.rules,
    
    "prettier/prettier": "error"
  }