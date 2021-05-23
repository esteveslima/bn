const eslintConfig = require('./.eslintrc.js');
const eslintConfigTs = require('./ts.eslintrc.js');
const jestConfig = require('./jest.config.js');
const babelConfig = require('./babel.config.js');
const webpackConfig = require('./webpack.config.js');

module.exports = {
  eslintConfig,
  eslintConfigTs,
  jestConfig,
  babelConfig,
  webpackConfig,
};
