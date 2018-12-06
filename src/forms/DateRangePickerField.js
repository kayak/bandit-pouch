import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import FormField from './FormField';
import { DateRangePicker } from '../ui';
import { DEFAULT_DATE_FORMAT, getDatePickerRanges } from '../ui/DateRangePicker';

/**
 * Component that encapsulates the Date Range Picker component as Redux Form field component.
 */
const DateRangePickerField = ({
  input, label, help, meta, minDate, maxDate, dateFormat, ranges, onChangeValue,
}) => (
  <FormField id={input.id} label={label} help={help} meta={meta}>
    <DateRangePicker
      value={input.value || undefined}
      minDate={minDate}
      maxDate={maxDate}
      dateFormat={dateFormat}
      ranges={ranges}
      onChange={(params) => {
        input.onChange(params);
        if (onChangeValue) onChangeValue(params);
      }}
    />
  </FormField>
);

DateRangePickerField.propTypes = {
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
   * A minimum date.
   */
  minDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /**
   * A maximum date.
   */
  maxDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /**
   * A date format as a string.
   */
  dateFormat: PropTypes.string,
  /**
   * An object with labels as keys and tuples shaped as [startDate, endDate] as values. Those will be used as
   * the window ranges that will be available for selection. See getDatePickerRanges function for more info.
   */
  ranges: PropTypes.objectOf(PropTypes.array),
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

DateRangePickerField.defaultProps = {
  help: null,
  label: null,
  minDate: null,
  maxDate: null,
  dateFormat: DEFAULT_DATE_FORMAT,
  ranges: getDatePickerRanges(),
  meta: { touched: false, error: [] },
  onChangeValue: _.noop,
};

export default DateRangePickerField;
