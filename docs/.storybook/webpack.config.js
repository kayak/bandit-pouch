const path = require('path');

module.exports = ({ config, mode }) => {
  // Extend config as you need.
  return {
    ...config,
    devtool: 'inline-cheap-module-source-map',
    resolve: {
      alias: {
        'bandit-pouch$': path.resolve(__dirname, '../../src/index'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: [
            path.resolve(__dirname, '../../'),
            path.resolve(__dirname, '../'),
          ],
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                rootMode: "upward",
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: { name: '[name].[ext]' },
            },
          ],
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: ['url-loader'],
        },
        {
          test: /\.css$/,
          include: [
            path.resolve(__dirname, '../../'),
            path.resolve(__dirname, '../'),
          ],
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: { sourceMap: true },
            },
          ],
        },
        {
          test: /\.stories\.jsx?$/,
          loaders: [require.resolve('@storybook/addon-storysource/loader')],
          enforce: 'pre',
        },
      ],
    },
  };
};
