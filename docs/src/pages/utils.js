import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Button,
  OverlayTrigger,
} from 'react-bootstrap';
import { tooltip, popover } from 'bandit-pouch';

import Layout from '../components/layout';
import { Tabs } from '../components/markdown';

const ReactExample = () => (
  <Row>
    <Col xs={6}>
      <p>Hover over the button to see the tootip</p>
      <OverlayTrigger placement="top" overlay={tooltip('Tooltip text')}>
        <Button>Show tooltip!</Button>
      </OverlayTrigger>
    </Col>
    <Col xs={6}>
      <p>Click the button to see the popover dialog</p>
      <OverlayTrigger trigger="click" placement="right" overlay={popover('Popover title', 'Popover text')}>
        <Button>Show Popover!</Button>
      </OverlayTrigger>
    </Col>
  </Row>
);

const UtilsPage = ({ data }) => (
  <Layout>
    <Tabs
      id="utils-tabs"
      data={data}
      examples={{
        'utils-react': [<ReactExample />],
      }}
      defaultActiveKey="utils-assert"
    />
  </Layout>
);

UtilsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`  
  query {
    allMarkdownRemark(filter: {
      frontmatter: {
        id: { glob: "utils-*" }
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

export default UtilsPage;
