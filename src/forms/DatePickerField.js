import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import FormField from './FormField';
import DatePicker from '../ui/DatePicker';
import {
  DEFAULT_DATE_FORMAT,
} from '../ui/DateRangePicker';

/**
 * Component that encapsulates the Date Picker component as Redux Form field component.
 */
const DatePickerField = ({
  input, label, help, meta, onChangeValue, ...props
}) => (
  <FormField id={input.id} label={label} help={help} meta={meta}>
    <DatePicker
      {...props}
      value={input.value || undefined}
      onChange={(params) => {
        input.onChange(params);
        if (onChangeValue) onChangeValue(params);
      }}
    />
  </FormField>
);

DatePickerField.propTypes = {
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
   * A date format as a string. Check out date-fns's format option for syntax.
   */
  dateFormat: PropTypes.string,
  /**
   * A minimum date. Anything prior to it will be disabled.
   */
  minDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /**
   * A maximum date. Anything after it will be disabled.
   */
  maxDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /**
   * Sets the direction of the calendar overlay.
   */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
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

DatePickerField.defaultProps = {
  help: null,
  label: null,
  disabled: false,
  dateFormat: DEFAULT_DATE_FORMAT,
  minDate: null,
  maxDate: null,
  placement: 'bottom',
  meta: { touched: false, error: [] },
  onChangeValue: _.noop,
};

export default DatePickerField;
