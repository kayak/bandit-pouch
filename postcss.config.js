/* eslint-disable import/no-extraneous-dependencies */
const reporter = require('postcss-reporter');
const autoprefixer = require('autoprefixer');
const postCssImport = require('postcss-import');

module.exports = () => ({
  map: true,
  plugins: [
    postCssImport(),
    autoprefixer({
      overrideBrowserslist: ['last 4 versions', 'not ie <= 8'],
    }),
    reporter(),
  ],
});
