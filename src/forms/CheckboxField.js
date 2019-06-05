import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

import FormField from './FormField';

function toValue(checked, defaultValue) {
  if (_.isNil(checked)) {
    return defaultValue;
  }

  return !!checked;
}

/**
 * Component that renders an HTML Checkbox field
 */
const CheckboxField = ({
  input, label, help, meta, defaultValue, disabled,
}) => {
  const hasErrors = !_.isEmpty(meta.error);

  return (
    <FormField id={input.id} help={help} meta={meta}>
      <Form.Check
        type="checkbox"
        name={input.name}
        label={label}
        checked={toValue(input.value, defaultValue)}
        disabled={disabled}
        onChange={evt => input.onBlur(evt.target.checked)}
        isValid={meta.touched && !hasErrors}
        isInvalid={meta.touched && hasErrors}
      />
    </FormField>
  );
};

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
   * Sets the initial/default value for this checkbox input field
   */
  defaultValue: PropTypes.bool,
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
  defaultValue: false,
  meta: { touched: false, error: [] },
};

export default CheckboxField;
