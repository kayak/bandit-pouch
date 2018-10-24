const _ = require('lodash');
const pkg = require('../package-lock');

module.exports = {
  pathPrefix: 'bandit-pouch',
  siteMetadata: {
    title: 'Bandit Pouch',
    description: 'Common React components and utilities',
    library: _.pick(pkg, ['name', 'version']),
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'components',
        // Location of your React components
        path: '../src/',
        ignore: [
          '**/index.js',
          '**/utils.js',
          '../src/redux/**',
        ],
      },
    },
    // "Transforms" our "source" of React/JS files with the react-docgen CLI
    // and creates a GraphQL node with the output
    'gatsby-transformer-react-docgen',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/templates`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
  ],
};
