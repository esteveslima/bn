const path = require('path');

module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/typescript',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      configFile: path.resolve(__dirname, 'babel.config.js'),
    },
  },
  plugins: [

  ],
  rules: {
    'max-len': 'off',
    'no-unused-vars': 'off',

    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

    'import/extensions': ['error', 'ignorePackages', { js: 'never', ts: 'never' }],
    'import/no-unresolved': ['error', { ignore: ['^aws-lambda$'] }],
  },
  settings: {
  },
};
