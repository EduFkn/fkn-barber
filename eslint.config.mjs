import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Adicione esta configuração extra para customizar regras do React
    rules: {
      "react/react-in-jsx-scope": "off"
    },
    settings: {
      react: {
        version: "detect" // Remove o warning sobre a versão do React
      }
    }
  }
]);