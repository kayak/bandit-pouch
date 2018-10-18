import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';

import Code from '../components/code';
import Layout from '../components/layout';
import ExampleForm from '../components/form-example';
import { getArticles, Markdown } from '../components/markdown';
import store from '../store';

const Values = connect(
  state => ({ ...state.form }),
)(({ example = {} }) => {
  const { registeredFields = {}, values = {}, fields = {} } = example;

  const debug = Object.keys(registeredFields).reduce((obj, key) => {
    const field = {
      name: key,
      value: values[key] || null,
      active: false,
      touched: false,
      ...fields[key] || {},
    };
    return { ...obj, [key]: field };
  }, {
    active: example.active || false,
    anyTouched: !!example.anyTouched,
  });

  return (
    <div>
      <p>Debug values</p>
      <Code language="json">{JSON.stringify(debug, null, 2)}</Code>
    </div>
  );
});

const FormPage = ({ data }) => {
  const [article] = getArticles(data);
  return (
    <Provider store={store}>
      <Layout>
        <Markdown title="Form components" html={article.html} />

        <ExampleForm handleSubmit={console.log} />
        <Values />
      </Layout>
    </Provider>
  );
};

FormPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`  
  query {
    allMarkdownRemark(filter: {
      frontmatter: {
        id: { glob: "forms-*" }
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

export default FormPage;
