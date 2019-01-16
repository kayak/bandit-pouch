import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Calendar } from 'react-date-range';
import { FormControl } from 'react-bootstrap';
import DatePickerOverlay from './DatePickerOverlay';
import {
  DEFAULT_DATE_FORMAT,
} from './DateRangePicker';

class DatePicker extends Component {
  state = {
    show: false,
  };

  constructor(...arrgs) {
    super(...arrgs);

    this.onToggle = this.onToggle.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { value, dateFormat, disabled } = this.props;
    const { show } = this.state;

    return (
      value !== nextProps.value
      || dateFormat !== nextProps.dateFormat
      || disabled !== nextProps.disabled
      || show !== nextState.show
    );
  }

  onToggle() {
    this.setState(state => ({ ...state, show: !state.show }));
  }

  onChange(date) {
    const { onChange } = this.props;
    onChange(moment(date).startOf('day').toDate());
  }

  format(value) {
    const { dateFormat } = this.props;
    let date;

    if (!value) {
      date = moment();
    } else {
      date = moment(value);
    }

    return [date.toDate(), date.format(dateFormat)];
  }

  render() {
    const {
      value, disabled, placement, dateFormat,
    } = this.props;
    const { show } = this.state;

    const [date, label] = this.format(value);

    return (
      <span>
        <FormControl
          value={label}
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
          <Calendar
            date={date}
            dateDisplayFormat={dateFormat}
            onChange={this.onChange}
            scroll={{ enabled: true }}
          />
        </DatePickerOverlay>
      </span>
    );
  }
}

DatePicker.propTypes = {
  /**
   * Currently selected date value
   */
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /**
   * Whether the component is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * A date format as a string. Check out date-fns's format option for syntax.
   */
  dateFormat: PropTypes.string,
  /**
   * Sets the direction of the calendar overlay.
   */
  placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /**
   * Callback invoked when the date changes.
   */
  onChange: PropTypes.func,
};

DatePicker.defaultProps = {
  value: null,
  disabled: false,
  dateFormat: DEFAULT_DATE_FORMAT,
  placement: 'bottom',
  onChange: _.noop,
};

export default DatePicker;
