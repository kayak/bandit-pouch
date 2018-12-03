import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';
import BootstrapDateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
import _ from 'lodash';

const TODAY = 'Today';
const YESTERDAY = 'Yesterday';
const PREVIOUS_WEEK = 'Previous Week';
const LAST_7_DAYS = 'Last 7 Days';

export const CUSTOM_RANGE = 'Custom Range';
export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';

export function getDatePickerRanges(date = moment()) {
  const today = moment.utc(date.format('YYYY-MM-DDTHH:mm:ss+00:00'));
  // +00:00 == UTC
  const yesterdayEnd = moment.utc(today).endOf('day').subtract(1, 'd');
  const twoDaysAgoEnd = moment.utc(today).endOf('day').subtract(2, 'd');
  const lastWeekEnd = moment.utc(today).endOf('week').subtract(1, 'w');

  // Subtract for months uses 30 as the amount of days, therefore not addressing the difference of days among
  // months properly. So as a workaround startOf('month') - 1 millisecond is being used instead.
  const lastMonthEnd = moment.utc(today).startOf('month').subtract(1, 'ms');

  return {
    [TODAY]: [moment(today).startOf('day'), today],
    [YESTERDAY]: [moment(yesterdayEnd).startOf('day'), yesterdayEnd],
    'Two days ago': [moment(twoDaysAgoEnd).startOf('day'), twoDaysAgoEnd],
    'Current Week': [moment(today).startOf('w'), today],
    [PREVIOUS_WEEK]: [moment(lastWeekEnd).startOf('w'), lastWeekEnd],
    'Current Month': [moment(today).startOf('M'), today],
    'Previous Month': [moment(lastMonthEnd).startOf('M'), lastMonthEnd],
    'Previous 3 Months': [moment(lastMonthEnd).startOf('M').subtract(2, 'M'), lastMonthEnd],
    'Previous 6 Months': [moment(lastMonthEnd).startOf('M').subtract(5, 'M'), lastMonthEnd],
    [LAST_7_DAYS]: [moment(yesterdayEnd).startOf('day').subtract(6, 'd'), yesterdayEnd],
    'Last 14 Days': [moment(yesterdayEnd).startOf('day').subtract(13, 'd'), yesterdayEnd],
    'Last 30 Days': [moment(yesterdayEnd).startOf('day').subtract(29, 'd'), yesterdayEnd],
    'Last 90 Days': [moment(yesterdayEnd).startOf('day').subtract(89, 'd'), yesterdayEnd],
    'Last 360 Days': [moment(yesterdayEnd).startOf('day').subtract(359, 'd'), yesterdayEnd],
  };
}

/**
 * Date Range Picker Component that shows a dropdown where you can select a date range.
 */
class DateRangePicker extends Component {
  constructor(props) {
    super(props);
    this.onApply = this.onApply.bind(this);
    this.setDates = this.setDates.bind(this);
    this.setWindow = this.setWindow.bind(this);
    this.initializeFilterValue = this.initializeFilterValue.bind(this);
  }

  onApply(evt, { chosenLabel: window, startDate, endDate }) {
    return (CUSTOM_RANGE === window ? this.setDates(startDate, endDate) : this.setWindow(window, startDate, endDate));
  }

  setDates(startDate, endDate) {
    const {
      dateFormat,
      onChange,
    } = this.props;

    if (onChange) {
      onChange({
        window: null,
        start: startDate.format(dateFormat),
        end: endDate.format(dateFormat),
      });
    }
  }

  setWindow(window, startDate, endDate) {
    const {
      dateFormat,
      onChange,
    } = this.props;

    if (onChange) {
      onChange({
        window,
        start: startDate.format(dateFormat),
        end: endDate.format(dateFormat),
      });
    }
  }

  initializeFilterValue(ranges) {
    const {
      value: {
        window,
        start,
        end,
      },
      dateFormat,
    } = this.props;

    if (!_.isUndefined(window) && _.has(ranges, window)) {
      const [startDate, endDate] = ranges[window];
      return [startDate, endDate, window];
    }

    if (_.isUndefined(start) && _.isUndefined(end)) {
      const [startDate, endDate] = ranges[dateFormat];
      return [startDate, endDate, dateFormat];
    }

    const startDate = moment.utc(start);
    const endDate = moment.utc(end);

    const inputValue = `${startDate.format(dateFormat)} - ${endDate.format(dateFormat)}`;
    return [startDate, endDate, inputValue];
  }

  render() {
    const {
      minDate, maxDate, dateFormat, ranges,
    } = this.props;
    const [startDate, endDate, inputValue] = this.initializeFilterValue(ranges);

    return (
      <BootstrapDateRangePicker
        style={{ width: '100%' }}
        opens="right"
        locale={{ format: dateFormat }}
        ranges={ranges}

        minDate={minDate}
        maxDate={maxDate}

        startDate={startDate}
        endDate={endDate}

        onApply={this.onApply}
        showDropdowns
        alwaysShowCalendars
        autoUpdateInput={false}
      >
        <FormControl
          className="date-picker"
          value={inputValue}
          onChange={_.identity}
        />
      </BootstrapDateRangePicker>
    );
  }
}

DateRangePicker.propTypes = {
  /**
   * An object that can contain either a window or start/end dates.
   */
  value: PropTypes.shape({
    start: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    end: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    window: PropTypes.string,
  }),
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
   * Callback invoked when the date range changes. This function is invoked with an object that can contain either
   * a window or start/end dates.
   */
  onChange: PropTypes.func,
};

DateRangePicker.defaultProps = {
  value: {
    window: LAST_7_DAYS,
    start: null,
    end: null,
  },
  minDate: null,
  maxDate: null,
  dateFormat: DEFAULT_DATE_FORMAT,
  ranges: getDatePickerRanges(),
  onChange: _.noop,
};

export default DateRangePicker;
