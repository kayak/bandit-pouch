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
  className,
  ...props
}) => (
  <div className={classNames('section-headline', className)} {...props}>
    <h4 className="text-primary m-0">
      {title} {subtitle && (<small className="help-text">{subtitle}</small>)}
    </h4>
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
  /**
   * Component class name
   */
  className: PropTypes.string,
};

Headline.defaultProps = {
  subtitle: null,
  className: null,
};

export default Headline;
