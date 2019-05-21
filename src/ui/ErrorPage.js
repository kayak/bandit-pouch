import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Renders an error page with an error message and a Font Awesome icon
 */
const ErrorPage = ({
  icon, status, className, message, children,
}) => (
  <div className={classnames('error-page', 'bandit-error-page', className)}>

    {status && (
      <div className={classnames('error-page-status', `error-${status}`)}>
        {status}
      </div>
    )}

    <div className="error-page-message-wrapper">
      {icon && (
        <span className="error-page-icon">
          <FontAwesomeIcon icon={icon} size="3x" />
        </span>
      )}
      <h1 className="error-page-message">{message}</h1>
    </div>

    {children && (
      <div className="error-page-body-wrapper">
        {children}
      </div>
    )}
  </div>
);

ErrorPage.propTypes = {
  /**
   * Font awesome icon
   */
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
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

  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]),
};

ErrorPage.defaultProps = {
  icon: null,
  status: null,
  children: null,
  className: null,
};

export default ErrorPage;
