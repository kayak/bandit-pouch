const path = require('path');
const componentsQuery = require('./queries/components');

exports.onCreateWebpackConfig = ({
  actions,
  stage,
}) => {
  actions.setWebpackConfig({
    devtool: stage.includes('develop')
      ? 'cheap-inline-module-source-map'
      : 'source-map',
    resolve: {
      alias: {
        'bandit-pouch$': path.resolve(__dirname, '../src/index'),
      },
    },
  });
};

exports.createPages = ({ graphql, boundActionCreators }) => new Promise((resolve, reject) => {
  componentsQuery(graphql).then(({ data, errors }) => {
    if (errors) {
      return reject(errors);
    }

    const page = path.resolve('./src/pages/api.js');
    const components = data.allComponentMetadata.edges.map(({ node }) => node);

    boundActionCreators.createPage({
      context: { components },
      component: page,
      path: '/api',
    });

    components.forEach(node => boundActionCreators.createPage({
      context: { components, metadata: node },
      path: `/api/${node.displayName}`,
      component: page,
    }));

    return resolve();
  }).catch(reject);
});
