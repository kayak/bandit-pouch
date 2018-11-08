import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import {
  Dropdown,
  SafeAnchor,
  FormControl,
} from 'react-bootstrap';

/**
 * Function used to format the year and month value into a display string value
 * that is shown in the input field.
 *
 * Eg: 2019, 12 -> December, 2019
 */
const format = (year, month) => moment({ year, month }).format('MMMM, YYYY');

/**
 * Function used to parse a string value into an object containing the year, month
 * and display values.
 *
 * In case the value is invalid or missing, current year and month are taken as default.
 *
 * @param {String} value Year Month value, eg: 2019-12
 * @returns {Object} State object
 */
const toState = (value) => {
  let month;
  let year;

  if (_.isString(value)) {
    ([year, month] = value.split('-'));
  }

  if (!year || !month) {
    const date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
  }

  return {
    display: format(year, month),
    month: parseInt(month, 10),
    year: parseInt(year, 10),
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
      opened: false,
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
      display: format(state.year, month),
    }), this.onChange);
  }

  onYearChange(diff) {
    this.setState(state => ({
      ...state,
      year: state.year + diff,
      display: format(state.year + diff, state.month),
    }));
  }

  onToggle(opened, event, { source }) {
    if (source === 'click') {
      this.setState({ opened }); // when toggle button is clicked
    } else if (source === 'rootClose') {
      this.setState({ opened: false }, this.onClose); // when body is clicked close the dialog
    }
  }

  execute(callback) {
    const { year, month } = this.state;
    if (_.isFunction(callback)) {
      callback(moment({ year, month }).format('YYYY-MM'), year, month);
    }
  }

  render() {
    const {
      opened, year, month, months, display,
    } = this.state;

    return (
      <Dropdown
        readOnly
        open={opened}
        id="month-dropdown"
        className="month-picker"
        onToggle={this.onToggle}
      >
        <Dropdown.Toggle useAnchor noCaret>
          <FormControl
            value={display}
            componentClass="input"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu className="month-picker-body">
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
                  className={i === month && 'active'}
                  onClick={() => this.onSelect(i)}
                >
                  {value}
                </SafeAnchor>
              </li>
            ))}
          </ul>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

MonthPicker.propTypes = {
  /**
   * Year-Month value, needs to be formated like this: YYYY-MM(2019-11)
   */
  value: PropTypes.string,
  /**
   * Callback invoked when the dropdown menu closes. This function is invoked with
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
  value: '',
  onClose: _.noop,
  onChange: _.noop,
};

export default MonthPicker;
