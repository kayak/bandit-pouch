import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import { Tabs } from '../components/markdown';

const ReduxPage = ({ data }) => (
  <Layout>
    <Tabs
      id="redux-tabs"
      data={data}
      defaultActiveKey="redux-actions"
    />
  </Layout>
);

ReduxPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`  
  query {
    allMarkdownRemark(filter: {
      frontmatter: {
        id: { glob: "redux-*" }
      }
    }){
      edges {
        node {
          html
          frontmatter {
            id
            title
          }
        }
      }
    }
  }
`;

export default ReduxPage;
