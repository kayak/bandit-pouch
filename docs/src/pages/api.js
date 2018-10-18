import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
} from 'react-bootstrap';

import Layout from '../components/layout';
import ComponentProps from '../components/component-props';
import './api.css';

const ComponentApiPage = ({ pageContext = {} }) => {
  const { metadata = {}, components = [] } = pageContext;
  const selected = Object.keys(metadata).length > 0;

  return (
    <Layout>
      <Row>
        <Col sm={4} md={3} lg={2}>
          <ul className="nav api-components-list">
            {components.map(component => (
              <li
                key={component.id}
                className={component.id === metadata.id ? 'active' : null}
              >
                <Link to={`/api/${component.displayName}`}>
                  {component.displayName}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col sm={8} md={9} lg={10}>
          {!selected && (
            <p className="text-center">
              <br/>
              <br/>
              <i>{'Select a component to inspect it\'s documentation.'}</i>
            </p>
          )}
          {selected && (
            <article>
              <h1>{metadata.displayName}</h1>
              <p>{metadata.docblock || (<i>No description provided</i>)}</p>
              <hr />
              <h4>Available props:</h4>
              <ComponentProps propMetaData={metadata.childrenComponentProp} />
            </article>
          )}
        </Col>
      </Row>
    </Layout>
  );
};

ComponentApiPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default ComponentApiPage;
