import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FontAwesome from 'react-fontawesome';

/**
 * Renders an error page with an error message and a Font Awesome icon
 */
const ErrorPage = ({
  icon, status, className, message,
}) => (
  <div className={classnames('error-page', 'bandit-error-page', className)}>

    {status && (
      <div className={classnames('error-page-status', `error-${status}`)}>
        {status}
      </div>
    )}

    <div className="error-page-message-wrapper">
      {icon && <FontAwesome name={icon} size="3x" className="error-page-icon" />}
      <h1 className="error-page-message">{message}</h1>
    </div>
  </div>
);

ErrorPage.propTypes = {
  /**
   * Font awesome icon
   */
  icon: PropTypes.string,
  /**
   * Additional class names
   */
  className: PropTypes.string,

  /**
   * HTTP Error status code
   */
  status: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),

  /**
   * Error message to be shown in the page. It can be a String,
   * React Component or an node
   */
  message: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

ErrorPage.defaultProps = {
  icon: null,
  status: null,
  className: null,
};

export default ErrorPage;
