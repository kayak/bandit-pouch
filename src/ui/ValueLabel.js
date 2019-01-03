import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Component used to display a value and it's label
 */
const ValueLabel = ({
  label,
  value,
  className,
  labelClassName,
  valueClassName,
}) => (
  <div className={classNames('value-label', className)}>
    <p className={classNames('m-0', labelClassName)}>
      {label}
    </p>
    <small className={classNames('m-0', valueClassName)}>
      {value}
    </small>
  </div>
);

ValueLabel.propTypes = {
  /**
   * Label used to describe the value
   */
  label: PropTypes.string.isRequired,
  /**
   * Value to be shown. It can be a string, React or DOM element
   */
  value: PropTypes.oneOfType([
    PropTypes.string, PropTypes.node, PropTypes.element,
  ]).isRequired,
  /**
   * Component class name
   */
  className: PropTypes.string,
  /**
   * Class name to be used on the label element
   */
  labelClassName: PropTypes.string,
  /**
   * Class name to be used on the value element
   */
  valueClassName: PropTypes.string,
};

ValueLabel.defaultProps = {
  className: null,
  valueClassName: null,
  labelClassName: 'text-primary',
};

export default ValueLabel;
