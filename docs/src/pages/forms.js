import React, { Component } from 'react';
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
      <JSONCode json={debug} />
    </div>
  );
});

const JSONCode = ({ json }) => (
  <Code language="json">{JSON.stringify(json, null, 2)}</Code>
);

JSONCode.propTypes = {
  json: PropTypes.object.isRequired,
};

class FormPage extends Component {
  constructor(...args) {
    super(...args);
    this.state = { values: false };
  }

  onSubmit(values) {
    this.setState({ values });
  }

  render() {
    const { data } = this.props;
    const { values } = this.state;
    const [article] = getArticles(data);

    return (
      <Provider store={store}>
        <Layout>
          <h1>Form components</h1>
          <hr />
          <ExampleForm onSubmit={e => this.onSubmit(e)} />

          {values && (
            <>
              <p>Submitted values</p>
              <JSONCode json={values} />
            </>
          )}

          <Values />

          <Markdown html={article.html} />
        </Layout>
      </Provider>
    );
  }
}

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
