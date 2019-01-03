/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Renders a section headline with an optional subtitle
 */
const Headline = ({
  title,
  subtitle,
  children,
  className,
  ...props
}) => (
  <div className={classNames('headline', className)} {...props}>
    <header className="headline-title">
      <h1 className="m-0">
        {title} {subtitle && (<small className="help-text">{subtitle}</small>)}
      </h1>
    </header>
    <aside className="headline-actions">
      {children}
    </aside>
  </div>
);

Headline.propTypes = {
  /**
   * Headline title
   */
  title: PropTypes.string.isRequired,
  /**
   * Headline subtitle
   */
  subtitle: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  /**
   * Component class name
   */
  className: PropTypes.string,
};

Headline.defaultProps = {
  subtitle: null,
  children: null,
  className: null,
};

export default Headline;
