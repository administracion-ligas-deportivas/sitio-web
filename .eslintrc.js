module.exports = {
  // Agregar prettier para no tener problemas de compatibilidad con prettier y
  // eslint.
  extends: [
    // https://www.npmjs.com/package/eslint-config-airbnb
    "airbnb",
    "airbnb/hooks",

    /**
    https://nextjs.org/docs/basic-features/eslint If you already have ESLint
    configured in your application and any of the following conditions are true:

    You have one or more of the following plugins already installed (either
    separately or through a different config such as airbnb or react-app)

    Then we recommend either removing these settings if you prefer how these
    properties have been configured within eslint-config-next or extending
    directly from the Next.js ESLint plugin instead:

    // "next/core-web-vitals",
    */
    "plugin:@next/next/core-web-vitals",
    "plugin:@next/next/recommended",
    "plugin:react/recommended",
    // 'semistandard',
    // https://www.npmjs.com/package/eslint-plugin-prettier
    "prettier",
    "plugin:prettier/recommended"
  ],
  // extends: ["next/core-web-vitals", "airbnb", "airbnb/hooks", "prettier"],
  plugins: ["prettier", "@next/next", "react"],
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
    "no-unused-vars": [2, "all"],
    "no-var": "error",
    // "space-before-function-paren": ["warn", "never"],
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    // Quitar opciones que dan problemas al proyecto de Next.js y provienen de
    // Airbnb.
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off"
  }
  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  // https://christianklein.dev/posts/setting-up-eslint-for-nextjs-with-typescript
  //
  // overrides: [
  //   {
  //     rules: {
  //       "react/jsx-filename-extension": [
  //         "warning",
  //         {
  //           extensions: [".js", ".jsx"]
  //         }
  //       ]
  //     }
  //   }
  // ]
};
