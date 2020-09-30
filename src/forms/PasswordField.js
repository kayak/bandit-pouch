import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';

const PasswordField = ({
  input, label, placeholder, help, meta, disabled, onChangeValue, ...props
}) => (
  <InputField
    {...props}
    type="password"
    input={input}
    label={label}
    help={help}
    meta={meta}
    disabled={disabled}
    placeholder={placeholder}
    onChange={onChangeValue}
  />
);

PasswordField.propTypes = {
  /**
   * Original input field passed by the React Form
   */
  input: PropTypes.any.isRequired,
  /**
   * Input field label
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Help text used to describe the field's purpose
   */
  help: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Callback function that returns the value of the input when it's changed
   */
  onChangeValue: PropTypes.func,
  /**
   * Whether the field is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * Placeholder text for textarea input field
   */
  placeholder: PropTypes.string,
  /**
   * Metadata object that is passed by the React Form
   */
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
  }),
};

PasswordField.defaultProps = {
  help: null,
  label: null,
  disabled: false,
  placeholder: null,
  onChangeValue: _.noop,
  meta: { touched: false, error: [] },
};

export default PasswordField;
