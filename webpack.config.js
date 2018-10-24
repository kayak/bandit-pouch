/* eslint-env node */
const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const externals = require('webpack-node-externals');
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');


const { DefinePlugin } = webpack;

function stringify(data) {
  return _.reduce(data, (config, value, key) => ({
    ...config, [key]: JSON.stringify(value),
  }), {});
}

const baseConfig = environment => ({
  entry: path.join(__dirname, 'src/index.js'),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new DefinePlugin(stringify({
      'process.env.NODE_ENV': environment,
    })),
  ],
});

const testConfig = {
  mode: 'none',
  target: 'node',
  devtool: 'inline-cheap-module-source-map',
  externals: [externals()],
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(js|ts)/,
      include: path.resolve('src'),
      loader: 'istanbul-instrumenter-loader',
      query: { esModules: true },
    }],
  },
};

const commonJSConfig = {
  mode: 'production',
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, 'dist/lib'),
  },
  plugins: [
    new PeerDepsExternalsPlugin(),
  ],
};

module.exports = (env) => {
  // eslint-disable-next-line no-console
  console.log(`Running Webpack build for '${env}'`);

  switch (env) {
    case 'test':
      return merge.smart(baseConfig('test'), testConfig);
    case 'cjs':
      return merge.smart(baseConfig('production'), commonJSConfig);
    default:
      throw new Error(`Invalid Webpack environment: '${env}'`);
  }
};
