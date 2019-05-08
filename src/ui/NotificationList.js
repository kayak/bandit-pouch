import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

const SECONDS = 1000;

/**
 * Individual Notification (using the Bootstrap Alert box)
 */
export class NotificationItem extends Component {
  componentWillMount() {
    const { timeout } = this.props;
    if (timeout && setTimeout) {
      this.timeout = setTimeout(() => this.close(), timeout * SECONDS);
    }
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  close() {
    const { id, onClose } = this.props;
    onClose(id);
    this.clearTimeout();
  }

  clearTimeout() {
    if (clearTimeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    const {
      header,
      errors,
      message,
      variant,
    } = this.props;

    return (
      <Alert
        dismissible
        variant={variant}
        onClose={() => this.close()}
      >
        {header && <h4>{header}</h4>}
        <p>{message}</p>
        <ul>
          {_.map(errors, error => (<li key={error}>{error}</li>))}
        </ul>
      </Alert>
    );
  }
}

NotificationItem.propTypes = {
  /**
   * Alert id
   */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * Alert headline
   */
  header: PropTypes.string,
  /**
   * Message to display
   */
  message: PropTypes.string.isRequired,
  /**
   * A list of errors to be rendered in the alert
   */
  errors: PropTypes.arrayOf(PropTypes.string),
  /**
   * Bootstrap Alert type, e.g. info/success
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
  /**
   * Sets the time in seconds how long should an alert be visible
   */
  timeout: PropTypes.number,
  /**
   * Callback function executed when alert is dismissed
   */
  onClose: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  header: null,
  errors: [],
  timeout: 30,
  variant: 'info',
};

/**
 * Container component creating a NotificationItem for each notification in the Redux store
 */
export const NotificationList = ({ alerts, timeout, clearAlert }) => (
  <div id="notification-container">
    {_.map(alerts, ({
      id, header, message, errors, variant,
    }) => (
      <NotificationItem
        key={id}
        id={id}
        header={header}
        message={message}
        errors={errors}
        variant={variant}
        timeout={timeout}
        onClose={clearAlert}
      />
    ))}
  </div>
);

NotificationList.propTypes = {
  /**
   * Sets the time in seconds how long should an alert be visible
   */
  timeout: PropTypes.number,
  /**
   * List of Alerts to be displayed
   */
  alerts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    header: PropTypes.string,
    message: PropTypes.string.isRequired,
    errors: PropTypes.arrayOf(PropTypes.string),
    variant: PropTypes.oneOf([
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
    ]),
  })),
  /**
   * Callback invoked when an alert has been dismissed
   */
  clearAlert: PropTypes.func,
};

NotificationList.defaultProps = {
  alerts: [],
  timeout: 30,
  clearAlert: () => {},
};

export default NotificationList;
