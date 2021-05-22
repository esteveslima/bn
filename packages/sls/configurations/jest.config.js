const path = require('path');

module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  coverageDirectory: '.coverage',

  modulePathIgnorePatterns: ['.mock'],

  setupFilesAfterEnv: [
    '<rootDir>/tests/config/default-setup.js',
  ],

  transform: {
    '\\.[jt]sx?$': ['babel-jest', { configFile: path.resolve(__dirname, 'babel.config.js') }],
  },
};
