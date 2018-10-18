import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

import Code from '../components/code';
import Layout from '../components/layout';

const ListGroupLink = ({ header, children, ...props }) => (
  <Link {...props} className="list-group-item">
    <h4 className="list-group-item-heading">{header}</h4>
    <p className="list-group-item-text">{children}</p>
  </Link>
);

ListGroupLink.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default () => (
  <Layout>
    <h4>Installation</h4>

    <Code language="bash">
      {'npm install bandit-pouch --save'}
    </Code>

    <hr />

    <ListGroup>
      <ListGroupLink header="UI components" to="/ui">
        Common React components
      </ListGroupLink>
      <ListGroupLink header="Forms" to="/forms">
        Form input control components
      </ListGroupLink>
      <ListGroupLink header="Redux" to="/redux">
        Redux helper functions
      </ListGroupLink>
      <ListGroupLink header="Utils" to="/utils">
        Custom utility funtions
      </ListGroupLink>
      <ListGroupLink header="Component API" to="/api">
        Component API documentation
      </ListGroupLink>
    </ListGroup>
  </Layout>
);
