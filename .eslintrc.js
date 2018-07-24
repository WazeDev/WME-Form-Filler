module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "greasemonkey": true,
        "jquery": true
    },
    "extends": "airbnb-base",
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "script"
    },
    "rules": {
        "camelcase": 0,
        "func-names": [0],
        "indent": ["error", 4],
        "linebreak-style": [0],
        "max-len": [1, 120, 2, {"ignoreComments": true}],
        "no-alert": [0],
        "no-console": [0],
        "no-use-before-define": [1],
        "no-unused-vars": [1, {"vars": "local", "args": "none"}],
        "no-var": [0],
        "prefer-destructuring": [0],
        "prefer-template": [1],
        "prefer-const": [0],
        "semi": ["error", "always"],
        "spaced-comment": [0],
        "strict": ["error", "function"]
    }
};