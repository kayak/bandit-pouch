import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

import FormField from './FormField';

/**
 * Component that renders an HTML Checkbox field
 */
const CheckboxField = ({
  input, label, help, meta, disabled,
}) => (
  <FormField id={input.id} help={help} meta={meta}>
    <Checkbox
      checked={!!input.value}
      disabled={disabled}
      onChange={evt => input.onChange(evt.target.checked)}
    >
      {label}
    </Checkbox>
  </FormField>
);

CheckboxField.propTypes = {
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

CheckboxField.defaultProps = {
  help: null,
  label: null,
  disabled: false,
  meta: { touched: false, error: [] },
};

export default CheckboxField;
