module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    // Aqui você pode adicionar regras específicas ou sobrescrever as padrões
    "react/react-in-jsx-scope": "off", // Desnecessário com React 17+
    "react/prop-types": "off", // Desativa prop-types se usar TypeScript
    "no-unused-vars": "warn", // Exibe warning para variáveis não usadas
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: {
    react: {
      version: "detect", // Detecta automaticamente a versão do React
    },
  },
};
