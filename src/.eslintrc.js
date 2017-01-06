module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false
  },
  extends: [
    'angular'
  ],
  rules: {
    'angular/no-service-method': 0,
    'angular/log': 0,
    'no-multi-spaces': 0,
    'prefer-const': 0,
    "indent": 0,
    "angular/json-functions": 0,
    "no-unneeded-ternary": 0,
    "angular/no-private-call": 0,
    "no-return-assign": 0,
    "angular/on-watch": 0,
    "no-unused-vars": 0
  }
}
