import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default {
    ...reactPlugin.configs.flat.recommended.rules,
    ...reactHooksPlugin.configs.recommended.rules,
    
    "react/jsx-uses-vars": "error",
    "react/no-typos": "warn",
    "react/jsx-tag-spacing": "warn",
    "react/jsx-boolean-value": "warn",
    "react/no-array-index-key": "warn",
    "react/jsx-wrap-multilines": "warn",
    "react/self-closing-comp": "warn",
    "react/jsx-closing-bracket-location": "warn",
    "react/require-render-return": "warn",
    "react/prefer-es6-class": "warn",
    "react/prefer-stateless-function": "warn",
    "react/jsx-uses-react": "warn",
    "react/no-multi-comp": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  }