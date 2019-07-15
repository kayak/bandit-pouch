import PropTypes from 'prop-types';
import classnames from 'classnames';
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CHILDREN_PROP_TYPE } from '../utils';

const CHILDREN_PROP_TYPES = {
  /**
   * Child components
   */
  children: CHILDREN_PROP_TYPE.isRequired,
};

/**
 * Component that is used to set the document title in the browser
 */
export class Page extends Component {
  componentDidMount() {
    const { title } = this.props;
    document.title = title;
  }

  componentWillReceiveProps(nextProps) {
    const {
      title,
    } = this.props;

    if (title !== nextProps.title) {
      document.title = nextProps.title;
    }
  }

  render() {
    const {
      style,
      className,
      children,
    } = this.props;

    return (
      <div className={classnames('page-layout-page', className)} style={style}>
        {children}
      </div>
    );
  }
}

Page.propTypes = {
  ...CHILDREN_PROP_TYPES,
  /**
   * Page title
   */
  title: PropTypes.string,
  /**
   * Custom CSS styling
   */
  style: PropTypes.object,
  /**
   * Additional class names
   */
  className: PropTypes.string,
};

Page.defaultProps = {
  style: null,
  title: null,
  className: null,
};

/**
 * Renders a top panel used mainly to contain a headline or a page title
 */
export const TopPanel = ({ style, className, children }) => (
  <div className={classnames('page-layout-toppanel', className)} style={style}>
    {children}
  </div>
);

TopPanel.propTypes = {
  ...CHILDREN_PROP_TYPES,
  /**
   * Custom CSS styling
   */
  style: PropTypes.object,
  /**
   * Additional class names
   */
  className: PropTypes.string,
};

TopPanel.defaultProps = {
  style: null,
  className: null,
};

/**
 * Wrapper around Bootstrap's Row component that makes it behave like flex container.
 * Should be used in conjunction with Left and Right components.
 */
export const HorizontalSplit = ({ style, className, children }) => (
  <Row className={classnames('page-layout-horizontalsplit', className)} style={{ ...style, display: 'flex' }}>
    {children}
  </Row>
);

HorizontalSplit.propTypes = {
  ...CHILDREN_PROP_TYPES,
  /**
   * Custom CSS styling
   */
  style: PropTypes.object,
  /**
   * Additional class names
   */
  className: PropTypes.string,
};
HorizontalSplit.defaultProps = { ...TopPanel.defaultProps };

/**
 * Renders a page layout content element
 */
export const Content = ({ style, className, children }) => (
  <div className={classnames('page-layout-content', className)} style={style}>
    {children}
  </div>
);

Content.propTypes = {
  ...CHILDREN_PROP_TYPES,
  /**
   * Custom CSS styling
   */
  style: PropTypes.object,
  /**
   * Additional class names
   */
  className: PropTypes.string,
};
Content.defaultProps = { ...TopPanel.defaultProps };

/**
 * Renders a Bootstrap's Col component with defined with, mainly used as a sidebar.
 * Should be used in conjunction with HorizontalSplit and Right components.
 */
export const Left = ({
  contentWidthXs = 8, contentWidthSm = 9, style, className, children,
}) => (
  <Col
    xs={12 - contentWidthXs}
    md={12 - contentWidthSm}
    className={classnames('page-layout-horizontalsplit-left', className)}
    style={style}
  >
    {children}
  </Col>
);

Left.propTypes = {
  ...CHILDREN_PROP_TYPES,
  /**
   * Custom CSS styling
   */
  style: PropTypes.object,
  /**
   * Additional class names
   */
  className: PropTypes.string,
  /**
   * Width of the Column element for extra small devices
   */
  contentWidthXs: PropTypes.number,
  /**
   * Width of the Column element for small devices
   */
  contentWidthSm: PropTypes.number,
};
Left.defaultProps = { ...TopPanel.defaultProps };

/**
 * Renders a Bootstrap's Col component with defined with that should be pushed to the right side.
 * Should be used in conjunction with HorizontalSplit and Left components.
 */
export const Right = ({
  contentWidthXs = 8, contentWidthSm = 9, style, className, children,
}) => (
  <Col
    xs={contentWidthXs}
    md={contentWidthSm}
    className={classnames('page-layout-horizontalsplit-right', className)}
    style={style}
  >
    {children}
  </Col>
);

Right.propTypes = {
  ...CHILDREN_PROP_TYPES,
  /**
   * Custom CSS styling
   */
  style: PropTypes.object,
  /**
   * Additional class names
   */
  className: PropTypes.string,
  /**
   * Width of the Column element for extra small devices
   */
  contentWidthXs: PropTypes.number,
  /**
   * Width of the Column element for small devices
   */
  contentWidthSm: PropTypes.number,
};
Right.defaultProps = { ...Left.defaultProps };

/**
 * Renders an element that is fixed to he bottom right corner.
 */
export const Float = ({ children }) => (
  <div style={{ position: 'fixed', bottom: '5em', right: '5em' }}>
    {children}
  </div>
);

Float.propTypes = { ...CHILDREN_PROP_TYPES };

export default {
  Page,
  TopPanel,
  Content,
  HorizontalSplit,
  Left,
  Right,
  Float,
};
