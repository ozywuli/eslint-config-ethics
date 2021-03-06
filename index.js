module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
    }
  },
  "rules": {
    "camelcase": 0,
    "comma-style": 1,
    "curly": "error",
    "indent": [
      "warn",
      "tab",
      {
        "SwitchCase": 1
      }
    ],
    "no-alert": 1,
    "no-console": 1,
    "no-unused-vars": [
      1,
      {
        "vars": "all",
        "args": "none",
        "ignoreRestSiblings": false
      }
    ],
    "semi": 1,
    "valid-jsdoc": 2
  },
  "globals": {
    "console": true,
    "document": true,
    "module": true,
    "window": true,
    "$": true,
    "d3": true,
    "React": true,
    "ReactDOM": true,
    "Swiper": true
  }
}