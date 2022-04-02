module.exports = {
  root: true,
  // Agregar prettier para no tener problemas de compatibilidad con prettier y
  // eslint.
  extends: [
    "next/core-web-vitals",
    // https://www.npmjs.com/package/eslint-config-airbnb
    // "airbnb",
    // "airbnb/hooks",
    "semistandard",
    // https://www.npmjs.com/package/eslint-plugin-prettier
    "prettier",
    "plugin:prettier/recommended"
  ],
  // extends: ["next/core-web-vitals", "airbnb", "airbnb/hooks", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ],
    /**  https://stackoverflow.com/a/40458301/13562806
     *
     * 2 es un error, 1 es un warning, 0 es off.
     * Semicolon (punto y coma) llevarlo siempre.
     */
    semi: [2, "always"],
    // "space-before-function-paren": ["error", "always"]
    "no-unused-vars": [2, "all"]
  }
};
