# eslint + prettier

`npm install eslint --save-dev`
`npm install --save-dev --save-exact prettier`

[eslint 官方文档](https://eslint.org/docs/latest/user-guide/getting-started)

```javascript
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  globals: {
    map: true,
    TMap: true,
    SPPUC: true,
    turf: true,
    westMap: true,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-alert": "error", // 禁止使用alert，confirm，prompt
    "object-shorthand": ["error", "always"], // 对象字面量中方法和属性使用简写语法
    "prefer-const": "warn",
    "prettier/prettier": [
      "warn",
      {
        trailingComma: "none",
        printWidth: 120,
        semi: false,
        tabWidth: 2,
        singleQuote: true,
      },
    ],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
```
