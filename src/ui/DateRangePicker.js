import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';
import { DateRangePicker as ReactDateRangePicker } from 'react-date-range';
import DatePickerOverlay from './DatePickerOverlay';

const TODAY = 'Today';
const YESTERDAY = 'Yesterday';
const PREVIOUS_WEEK = 'Previous Week';
const PREVIOUS_MONTH = 'Previous Month';
const LAST_7_DAYS = 'Last 7 Days';

/* Only display these options in the UI. The others are included for legacy support (bookmarked URLs) */
export const VISIBLE_RANGES = [
  TODAY,
  YESTERDAY,
  'Two days ago',
  LAST_7_DAYS,
  'Current Week',
  PREVIOUS_WEEK,
  'Current Month',
  'Year to Date',
];
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
    [PREVIOUS_MONTH]: [moment(lastMonthEnd).startOf('M'), lastMonthEnd],
    'Previous 3 Months': [moment(lastMonthEnd).startOf('M').subtract(2, 'M'), lastMonthEnd],
    'Previous 6 Months': [moment(lastMonthEnd).startOf('M').subtract(5, 'M'), lastMonthEnd],
    [LAST_7_DAYS]: [moment(yesterdayEnd).startOf('day').subtract(6, 'd'), yesterdayEnd],
    'Last 14 Days': [moment(yesterdayEnd).startOf('day').subtract(13, 'd'), yesterdayEnd],
    'Last 30 Days': [moment(yesterdayEnd).startOf('day').subtract(29, 'd'), yesterdayEnd],
    'Last 90 Days': [moment(yesterdayEnd).startOf('day').subtract(89, 'd'), yesterdayEnd],
    'Last 360 Days': [moment(yesterdayEnd).startOf('day').subtract(359, 'd'), yesterdayEnd],
  };
}

export function getDatePickerInputRanges(date = moment()) {
  const ranges = getDatePickerRanges(date);
  const yesterdayEnd = ranges[YESTERDAY][1];
  const previousMonthEnd = ranges[PREVIOUS_MONTH][1];

  return {
    'days up to today': { interval: 'day', endDate: yesterdayEnd },
    'months up to this month': { interval: 'month', endDate: previousMonthEnd },
  };
}

function getStaticRanges(ranges) {
  return _.keys(ranges).map(label => ({
    label,
    range: () => ({
      window: label,
      startDate: ranges[label][0],
      endDate: ranges[label][1],
    }),
    isSelected() {
      const definedRange = this.range();
      return this.label === definedRange.window;
    },
  }));
}

function getInputRanges(inputRanges) {
  return _.keys(inputRanges).map(label => ({
    /*
     * This is a modified version of the default. The math has been replaced with moment and
     * the calculation of the range has been changed to exclude "today" from it.
     *
     * See https://github.com/Adphorus/react-date-range/blob/master/src/defaultRanges.js#L90
     */
    label,
    range: (value) => {
      const inputRange = inputRanges[label];
      const input = Math.abs(Number(value));
      const amount = Math.max(input, 1) - 1;
      return {
        startDate: moment(inputRange.endDate).startOf(inputRange.interval).subtract(amount, inputRange.interval),
        endDate: inputRange.endDate,
      };
    },
    getCurrentValue: ({ startDate, endDate }) => {
      const inputRange = inputRanges[label];
      const isSameEndDate = endDate.isSame(inputRange.endDate, 'day');
      const diff = inputRange.endDate.diff(startDate, inputRange.interval) + 1;
      if (!isSameEndDate || diff < 1) return '-';
      if (!startDate) return '∞';
      return diff;
    },
  }));
}

export function parseDate(date) {
  const transformedDate = moment(date);
  return (_.isNil(date) || !transformedDate.isValid()) ? undefined : transformedDate.toDate();
}

/**
 * Date Range Picker Component that shows a dropdown where you can select a date range.
 */
class DateRangePicker extends Component {
  state = {
    show: false,
  };

  constructor(props) {
    super(props);
    this.onToggle = this.onToggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.initializeFilterValue = this.initializeFilterValue.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const prevProps = this.props;
    const prevState = this.state;

    return (
      !_.isEqual(_.get(prevProps, 'value'), _.get(nextProps, 'value'))
      || _.get(prevProps, 'dateFormat') !== _.get(nextProps, 'dateFormat')
      || _.get(prevProps, 'disabled') !== _.get(nextProps, 'disabled')
      || _.get(prevState, 'show') !== _.get(nextState, 'show')
    );
  }

  onToggle() {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  onChange(value) {
    const { onChange } = this.props;
    const { selection: { window, startDate, endDate } } = value;

    const newStartDate = moment(startDate).startOf('day');
    const newEndDate = moment(endDate).endOf('day');

    if (onChange) {
      onChange({
        window: _.isNil(window) ? null : window,
        start: newStartDate,
        end: newEndDate,
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

    let startDate = null;
    let endDate = null;

    if (
      (_.isUndefined(start) && _.isUndefined(end))
      || (!moment(start).isValid() || !moment(end).isValid())
    ) {
      startDate = moment().startOf('day');
      endDate = moment().endOf('day');
    } else {
      startDate = moment(start);
      endDate = moment(end);
    }

    const inputValue = `${startDate.format(dateFormat)} - ${endDate.format(dateFormat)}`;

    // For most of ReactDateRangePicker internals, using moment dates are not supported. For the range
    // prop that's ok though.
    return [startDate, endDate, inputValue];
  }

  render() {
    const {
      minDate, maxDate, dateFormat, ranges, inputRanges, placement, numCalendarMonths, calendarDirection,
      disabledDates, disabled,
    } = this.props;
    const { show } = this.state;
    const [startDate, endDate, inputValue] = this.initializeFilterValue(ranges);

    return (
      <span>
        <FormControl
          value={inputValue}
          disabled={disabled}
          onClick={this.onToggle}
          onChange={_.identity}
          ref={(input) => {
            this.target = input;
          }}
        />
        <DatePickerOverlay
          container={this}
          show={show && !disabled}
          onHide={this.onToggle}
          placement={placement}
          // eslint-disable-next-line react/no-find-dom-node
          target={() => this.target}
        >
          <ReactDateRangePicker
            showSelectionPreview

            months={numCalendarMonths}
            direction={calendarDirection}
            dateDisplayFormat={dateFormat}
            scroll={{ enabled: true }}

            minDate={parseDate(minDate)}
            maxDate={parseDate(maxDate)}
            disabledDates={disabledDates.map(parseDate).filter(date => date !== undefined)}

            ranges={[{ key: 'selection', startDate, endDate }]}
            staticRanges={!_.isNil(ranges) ? getStaticRanges(ranges) : undefined}
            inputRanges={!_.isNil(inputRanges) ? getInputRanges(inputRanges) : undefined}

            onChange={this.onChange}
          />
        </DatePickerOverlay>
      </span>
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
   * A minimum date. Anything prior to it will be disabled.
   */
  minDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /**
   * A maximum date. Anything after it will be disabled.
   */
  maxDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /**
   * Whether the component is disabled or not.
   */
  disabled: PropTypes.bool,
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
  disabled: false,
  dateFormat: DEFAULT_DATE_FORMAT,
  ranges: _.pickBy(getDatePickerRanges(), (value, key) => VISIBLE_RANGES.includes(key)),
  inputRanges: getDatePickerInputRanges(),
  placement: 'bottom',
  numCalendarMonths: 1,
  calendarDirection: 'vertical',
  disabledDates: [],
  onChange: _.noop,
};

export default DateRangePicker;
