import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import InputField from './InputField';

/**
 * Component that renders the Textarea input field
 */
const TextAreaField = ({
  input, label, placeholder, rows, cols, help, meta, disabled, onChangeValue,
}) => (
  <InputField
    input={input}
    label={label}
    help={help}
    meta={meta}
    rows={rows}
    cols={cols}
    disabled={disabled}
    placeholder={placeholder}
    onChange={onChangeValue}
    as="textarea"
  />
);

TextAreaField.propTypes = {
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
   * Number of columns that this textarea should have
   */
  cols: PropTypes.number,
  /**
   * Number of rows that this textarea should have
   */
  rows: PropTypes.number,
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

TextAreaField.defaultProps = {
  help: null,
  label: null,
  disabled: false,
  placeholder: null,
  cols: 6,
  rows: 4,
  onChangeValue: _.noop,
  meta: { touched: false, error: [] },
};

export default TextAreaField;
