module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended'
  ],
  rules: {
  },
  env: {
    'browser': true
  },
  rules: {
    'ember-suave/no-direct-property-access': 'off'
  }
};
