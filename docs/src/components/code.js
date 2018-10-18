import React, { Component } from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js';

class Code extends Component {
  constructor(props) {
    super(props);
    this.element = React.createRef();
  }

  componentDidMount() {
    this.highlight();
  }

  componentDidUpdate() {
    this.highlight();
  }

  highlight() {
    const { current } = this.element;
    current.querySelectorAll('code').forEach(node => hljs.highlightBlock(node));
  }

  render() {
    const { children, language } = this.props;

    return (
      <pre ref={this.element}>
        <code className={`hljs ${language}`}>{children}</code>
      </pre>
    );
  }
}

Code.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
};

Code.defaultProps = {
  language: 'javascript',
};

export default Code;
