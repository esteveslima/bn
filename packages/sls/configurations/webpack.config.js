const slsw = require('serverless-webpack');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const fs = require('fs');

const { serviceDir } = slsw.lib.serverless || { serviceDir: '' };
const { isLocal } = slsw.lib.webpack || { isLocal: true };
const isTsProject = (() => {
  try {
    return fs.readdirSync(serviceDir).includes('tsconfig.json');
  } catch (err) { return false; }
})();

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  devtool: isLocal ? 'cheap-source-map' : 'source-map',
  mode: isLocal ? 'none' : 'production',

  externals: [
    { 'aws-sdk': 'commonjs aws-sdk' },
  ],

  module: {
    rules: [

      {
        test: /\.(m?j|t)s$/,
        exclude: /node_modules/,
        include: `${serviceDir}/src`,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, 'babel.config.js'),
          },
        },
      },

      {
        test: /\.(jpe?g|png)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },

      {
        exclude: /^.*\.(test|mock).(j|t)s$/,
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  output: {
    libraryTarget: 'commonjs2',
    path: `${serviceDir}/.temp/.webpack`,
    filename: '[name].js',

    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },

  plugins: [
    ...(isLocal ? [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
      }),
    ] : []),

    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: isTsProject ? 'tsconfig.json' : path.resolve(__dirname, 'tsconfig.json'),
      },
    }),
  ],

  optimization: {
    usedExports: true,
    sideEffects: true,

    emitOnErrors: false,
  },
};
