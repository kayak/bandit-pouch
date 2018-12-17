import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

import MonthPicker from '../ui/MonthPicker';
import FormField from './FormField';

/**
 * Component that encapsulates the Month Picker component as Redux Form field component.
 */
const MonthPickerField = ({
  input, label, help, meta, onChangeValue, ...props
}) => (
  <FormField id={input.id} label={label} help={help} meta={meta}>
    <MonthPicker
      {...props}
      name={input.name}
      value={input.value}
      onClose={input.onBlur}
      onChange={(selected) => {
        input.onChange(selected);
        onChangeValue(selected);
      }}
    />
    <FormControl.Feedback />
  </FormField>
);

MonthPickerField.propTypes = {
  /**
   * Original input field passed by the React Form
   */
  input: PropTypes.any.isRequired,
  /**
   * Input field label
   */
  label: PropTypes.string,
  /**
   * Help text used to describe the field's purpose
   */
  help: PropTypes.string,
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
  /**
   * Callback function that returns the value of the input when it's changed
   */
  onChangeValue: PropTypes.func,
};

MonthPickerField.defaultProps = {
  help: null,
  label: null,
  disabled: false,
  meta: { touched: false, error: [] },
  onChangeValue: _.noop,
};

export default MonthPickerField;
