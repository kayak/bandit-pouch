import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'rc-switch';
import FormField from './FormField';

import 'rc-switch/assets/index.css';

/**
 * Component that renders an HTML Checkbox field
 */
const ToggleField = ({
  input: {
    id, value, onChange,
  }, label, help, meta, disabled,
}) => (
  <FormField id={id} help={help} meta={meta}>
    {/* eslint-disable-next-line jsx-a11y/label-has-for */}
    <label id={id} htmlFor={id}>
      <Switch
        checked={value === true}
        onChange={() => onChange(!value)}
        onClick={() => onChange(!value)}
        disabled={disabled}
      />
      {label && (
      <span className="form-check-label align-middle">
        {' '}
        {label}
      </span>
      )}
    </label>
  </FormField>
);

ToggleField.propTypes = {
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
   * Whether the field is disabled or not.
   */
  disabled: PropTypes.bool,
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

ToggleField.defaultProps = {
  help: null,
  label: null,
  disabled: false,
  meta: {
    touched: false,
    error: [],
  },
};

export default ToggleField;
