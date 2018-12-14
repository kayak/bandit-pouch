import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import FormField from './FormField';
import { DateRangePicker } from '../ui';
import {
  DEFAULT_DATE_FORMAT,
  getDatePickerInputRanges,
  getDatePickerRanges,
  VISIBLE_RANGES,
} from '../ui/DateRangePicker';

/**
 * Component that encapsulates the Date Range Picker component as Redux Form field component.
 */
const DateRangePickerField = ({
  input, label, help, meta, onChangeValue, ...props
}) => (
  <FormField id={input.id} label={label} help={help} meta={meta}>
    <DateRangePicker
      {...props}
      value={input.value || undefined}
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
   * Whether the field is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * A minimum date. Anything prior to it will be disabled.
   */
  minDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /**
   * A maximum date. Anything after it will be disabled.
   */
  maxDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /**
   * A date format as a string. Check out date-fns's format option for syntax.
   */
  dateFormat: PropTypes.string,
  /**
   * An object with labels as keys and tuples shaped as [startDate, endDate] as values. Those will be used as
   * the window ranges that will be available for selection. See getDatePickerRanges function for more info.
   * For disabling ranges, set this to empty list.
   */
  ranges: PropTypes.objectOf(PropTypes.array),
  /**
   * An object with labels as keys and an object shaped as {interval, endDate} as values. Those will be used as
   * the input ranges that will be available for selection. See getDatePickerInputRanges function for more info.
   * For disabling input ranges, set this to empty list.
   */
  inputRanges: PropTypes.objectOf(PropTypes.object),
  /**
   * Sets the direction of the calendar overlay.
   */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /**
   * The amount of calendar months that will be rendered.
   */
  numCalendarMonths: PropTypes.number,
  /**
   * The direction of calendar months. This is only relevant when you have more than one as numCalendarMonths.
   */
  calendarDirection: PropTypes.oneOf(['vertical', 'horizontal']),
  /**
   * A list of dates that will be disabled for selection. For the purpose of specifying a valid selection interval,
   * use minDate and maxDate props instead.
   */
  disabledDates: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
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
  disabled: false,
  minDate: null,
  maxDate: null,
  dateFormat: DEFAULT_DATE_FORMAT,
  ranges: _.pickBy(getDatePickerRanges(), (value, key) => VISIBLE_RANGES.includes(key)),
  inputRanges: getDatePickerInputRanges(),
  placement: 'bottom',
  numCalendarMonths: 1,
  calendarDirection: 'vertical',
  disabledDates: [],
  meta: { touched: false, error: [] },
  onChangeValue: _.noop,
};

export default DateRangePickerField;
