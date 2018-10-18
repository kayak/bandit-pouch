import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';
import { CHILDREN_PROP_TYPE } from '../utils';

/**
 * Renders an error page with an error message and a Font Awesome icon
 */
const ErrorPage = ({ icon, className, children }) => (
  <div className={classnames('error-page', className)}>
    {icon && <FontAwesome name={icon} size="4x" />}
    <h1 className="page-error">{children}</h1>
  </div>
);

ErrorPage.defaultProps = {
  /**
   * Font awesome icon
   */
  icon: null,
  /**
   * Additional class names
   */
  className: null,
};

ErrorPage.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  children: CHILDREN_PROP_TYPE.isRequired,
};

export default ErrorPage;
