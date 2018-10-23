/* eslint-disable import/no-extraneous-dependencies */
const cssnano = require('cssnano');
const reporter = require('postcss-reporter');
const autoprefixer = require('autoprefixer');
const postCssImport = require('postcss-import');

module.exports = () => ({
  map: true,
  plugins: [
    postCssImport(),
    autoprefixer({
      browserslist: ['last 4 versions', 'not ie <= 8'],
    }),
    cssnano(),
    reporter(),
  ],
});
