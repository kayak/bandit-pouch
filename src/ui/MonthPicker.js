import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { FormControl, SafeAnchor } from 'react-bootstrap';
import DatePickerOverlay from './DatePickerOverlay';

const DISPLAY_FORMAT = 'MMMM, YYYY';
const VALUE_FORMAT = 'YYYY-MM';

/**
 * Function used to format the year and month value into a display string value
 * that is shown in the input field.
 *
 * Eg: 2019, 12 -> December, 2019
 */
export const format = (year, month, pattern) => moment({ year, month }).format(pattern);
export const formatValue = (year, month) => format(year, month, VALUE_FORMAT);
export const formatDisplay = (year, month) => format(year, month, DISPLAY_FORMAT);

/**
 * Function used to parse a string value into an object containing the year, month
 * and display values.
 *
 * In case the value is invalid or missing, current year and month are taken as default.
 *
 * Eg: March, 2019 -> { year: 2019, month: 3, display: 'March, 2019' }
 *
 * @param {String} value Year Month value, eg: 2019-12
 * @returns {Object} State object
 */
export const toState = (value) => {
  let date = _.isEmpty(value) ? null : moment(value, VALUE_FORMAT);

  // date string is missing or it was invalid, default to now
  if (!date || !date.isValid()) {
    date = moment();
  }

  const year = date.year();
  const month = date.month();

  return {
    display: formatDisplay(year, month),
    month,
    year,
  };
};

/**
 * Year and Month Picker Component that shows a dropdown where you can select a
 * specific month in year.
 */
class MonthPicker extends Component {
  constructor(props, ...args) {
    super(props, ...args);

    this.onToggle = this.onToggle.bind(this);

    this.state = {
      show: false,
      months: moment.monthsShort(),
      ...toState(props.value),
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    if (value !== nextProps.value) {
      this.setState(toState(nextProps.value));
    }
  }

  onClose() {
    const { onClose } = this.props;
    this.execute(onClose);
  }

  onChange() {
    const { onChange } = this.props;
    this.execute(onChange);
  }

  onSelect(month) {
    this.setState(state => ({
      ...state,
      month,
      opened: false,
      display: formatDisplay(state.year, month),
    }), this.onChange);
  }

  onYearChange(diff) {
    this.setState(state => ({
      ...state,
      year: state.year + diff,
      display: formatDisplay(state.year + diff, state.month),
    }));
  }

  onToggle() {
    const { show } = this.state;
    this.setState({ show: !show });
    if (show) this.onClose();
  }

  execute(callback) {
    const { year, month } = this.state;
    if (_.isFunction(callback)) {
      callback(formatValue(year, month), year, month);
    }
  }

  render() {
    const {
      disabled, placement,
    } = this.props;
    const {
      show, year, month, months, display,
    } = this.state;

    return (
      <span>
        <FormControl
          value={display}
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
          <div className="month-picker-header">
            <SafeAnchor onClick={() => this.onYearChange(-1)}>
              <FontAwesome name="chevron-left" />
            </SafeAnchor>
            <span className="month-picker-year">{year}</span>
            <SafeAnchor onClick={() => this.onYearChange(1)}>
              <FontAwesome name="chevron-right" />
            </SafeAnchor>
          </div>
          <ul className="month-picker-months">
            {months.map((value, i) => (
              <li key={value}>
                <SafeAnchor
                  className={classNames('month-picker-month', i === month && 'active')}
                  onClick={() => this.onSelect(i)}
                >
                  {value}
                </SafeAnchor>
              </li>
            ))}
          </ul>
        </DatePickerOverlay>
      </span>
    );
  }
}

MonthPicker.propTypes = {
  /**
   * Year-Month value, needs to be formated like this: YYYY-MM(2019-11)
   */
  value: PropTypes.string,
  /**
   * Whether the component is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * Sets the direction of the calendar overlay.
   */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /**
   * Callback invoked when the overlay menu closes. This function is invoked with
   * formatted string value, year and month arguments.
   */
  onClose: PropTypes.func,
  /**
   * Callback invoked when either month or year value changes. This function is invoked with
   * formatted string value, year and month arguments.
   */
  onChange: PropTypes.func,
};

MonthPicker.defaultProps = {
  value: null,
  disabled: false,
  placement: 'bottom',
  onClose: _.noop,
  onChange: _.noop,
};

export default MonthPicker;
