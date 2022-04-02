module.exports = {
  // Agregar prettier para no tener problemas de compatibilidad con prettier y
  // eslint.
  extends: [
    "next/core-web-vitals",
    // https://www.npmjs.com/package/eslint-config-airbnb
    "airbnb",
    "airbnb/hooks",
    "prettier",
    // https://www.npmjs.com/package/eslint-plugin-prettier
    "plugin:prettier/recommended"
  ],
  // extends: ["next/core-web-vitals", "airbnb", "airbnb/hooks", "prettier"],
  plugins: ["prettier"],
  rules: {
    /**  https://stackoverflow.com/a/40458301/13562806
     *
     * 2 es un error, 1 es un warning, 0 es off.
     * Semicolon (punto y coma) llevarlo siempre.
     */
    semi: [2, "always"],
    "space-before-function-paren": ["error", "always"]
  }
};
