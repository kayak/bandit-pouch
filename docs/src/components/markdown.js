import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';

import {
  Col,
  Row,
  Nav,
  Tab,
  NavItem,
} from 'react-bootstrap';

const MarkdownTabs = ({
  id, pages, examples, defaultActiveKey,
}) => (
  <Tab.Container id={id} defaultActiveKey={defaultActiveKey}>
    <Row>
      <Col sm={4} md={3} lg={2}>
        <Nav bsStyle="pills" stacked>
          {pages.map(page => (
            <NavItem key={page.id} eventKey={page.id}>{page.title}</NavItem>
          ))}
        </Nav>
      </Col>
      <Col sm={8} md={9} lg={10}>
        <Tab.Content animation>
          {pages.map(page => (
            <Tab.Pane key={page.id} eventKey={page.id} title={page.title}>
              <Markdown
                html={page.html}
                title={page.title}
                examples={examples[page.id]}
              />
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
);

MarkdownTabs.propTypes = {
  id: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired,
  examples: PropTypes.object,
  defaultActiveKey: PropTypes.string.isRequired,
};

MarkdownTabs.defaultProps = {
  examples: {},
};

// extract articles from the GraphQL response
export function getArticles(data = {}) {
  const { allMarkdownRemark = {} } = data || {};
  const { edges = [] } = allMarkdownRemark || {};
  return edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
  }));
}

export function Tabs({
  id, defaultActiveKey, data, examples,
}) {
  const pages = getArticles(data);

  return (
    <MarkdownTabs
      id={id}
      pages={pages}
      examples={examples}
      defaultActiveKey={defaultActiveKey}
    />
  );
}

Tabs.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  examples: PropTypes.object,
  defaultActiveKey: PropTypes.string.isRequired,
};

Tabs.defaultProps = {
  examples: {},
};

export class Markdown extends Component {
  constructor(props) {
    super(props);
    this.element = React.createRef();
  }

  componentDidMount() {
    const { current } = this.element;
    current.querySelectorAll('code').forEach(element => hljs.highlightBlock(element));
  }

  render() {
    const { title, html, examples } = this.props;

    return (
      <div ref={this.element} className="row markdown-container">
        <Col xs={12}>
          <h1>{title}</h1>
        </Col>
        <hr />
        <Col xs={12}>
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: html }} // eslint-disable-line react/no-danger
          />
          {examples.map(example => (
            <span key={example}>{example}</span>
          ))}
        </Col>
      </div>
    );
  }
}

Markdown.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  examples: PropTypes.array,
};

Markdown.defaultProps = {
  examples: [],
};
