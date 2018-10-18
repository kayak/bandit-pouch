/* eslint-env node */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const config = require('./webpack.config');

module.exports = {
  ...config,
  mode: 'none',
  target: 'node',
  devtool: 'inline-cheap-module-source-map',
  externals: [nodeExternals(), ...config.externals || []],
  module: {
    ...config.module || {},
    rules: [...config.module.rules || [], {
      test: /\.(js|ts)/,
      enforce: 'pre',
      include: path.resolve('src'),
      loader: 'istanbul-instrumenter-loader',
      query: { esModules: true },
    }],
  },
};
