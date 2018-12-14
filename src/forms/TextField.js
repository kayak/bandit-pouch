import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import InputField from './InputField';

/**
 * Component that renders an HTML input field
 */
const TextField = ({
  input, label, placeholder, help, meta, disabled, type, onChangeValue,
}) => (
  <InputField
    type={type}
    input={input}
    label={label}
    help={help}
    meta={meta}
    disabled={disabled}
    placeholder={placeholder}
    onChange={onChangeValue}
  />
);

TextField.propTypes = {
  /**
   * Original input field passed by the React Form
   */
  input: PropTypes.any.isRequired,
  /**
   * Input type
   */
  type: PropTypes.string,
  /**
   * Input field label
   */
  label: PropTypes.string,
  /**
   * Help text used to describe the field's purpose
   */
  help: PropTypes.string,
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

TextField.defaultProps = {
  help: null,
  label: null,
  disabled: false,
  placeholder: null,
  type: 'text',
  onChangeValue: _.noop,
  meta: { touched: false, error: [] },
};

export default TextField;
