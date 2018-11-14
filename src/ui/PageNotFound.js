import React from 'react';
import PropTypes from 'prop-types';
import ErrorPage from './ErrorPage';

/**
 * Renders a `Not found` Error Page with a message and 404 status code
 */
const PageNotFound = ({ icon, message, ...props }) => (
  <ErrorPage {...props} status={404} icon={icon} message={message} />
);

PageNotFound.propTypes = {
  /**
   * Font awesome icon
   */
  icon: PropTypes.string,
  /**
   * Error message to be shown in the page. It can be a String,
   * React Component or an node
   */
  message: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]),
};

PageNotFound.defaultProps = {
  icon: 'frown-o',
  message: 'The page you requested was not found.',
};

export default PageNotFound;
