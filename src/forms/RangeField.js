import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import FormField from './FormField';

const parse = value => (
  _.isArray(value) ? { min: _.toNumber(value[0]), max: _.toNumber(value[1]) } : _.toNumber(value)
);
const format = value => (
  _.isObject(value) ? [value.min, value.max] : value
);

class RangeField extends Component {
  state = {
    value: _.get(this.props, 'input.value'),
  };

  componentWillReceiveProps(nextProps) {
    if (_.get(this.props, 'input.value') !== _.get(nextProps, 'input.value')) {
      this.setState({
        value: nextProps.input.value,
      });
    }
  }

  render() {
    const {
      input, label, formatLabel, disabled, help, min, max, step, meta, onChangeValue,
    } = this.props;
    const { value } = this.state;

    return (
      <FormField id={input.id} label={label} help={help} meta={meta}>
        <InputRange
          draggableTrack
          value={parse(value)}
          defaultValue={0}
          style={{
            display: 'block',
            width: '100%',
          }}
          minValue={min}
          maxValue={max}
          step={step}
          disabled={disabled}
          formatLabel={formatLabel}
          onChange={(newValue) => {
            const formattedValue = format(newValue);
            this.setState({
              value: formattedValue,
            });
          }}
          onChangeComplete={(newValue) => {
            const formattedValue = format(newValue);
            input.onBlur(formattedValue);
            onChangeValue(formattedValue);
          }}
        />
      </FormField>
    );
  }
}

RangeField.propTypes = {
  /**
   * Original input field passed by the React Form
   */
  input: PropTypes.any.isRequired,
  /**
   * Minimum value
   */
  min: PropTypes.number.isRequired,
  /**
   * Maximum value
   */
  max: PropTypes.number.isRequired,
  /**
   * Counter step
   */
  step: PropTypes.number,
  /**
   * Input field label
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Function used to format the range input label
   */
  formatLabel: PropTypes.func,
  /**
   * Help text used to describe the field's purpose
   */
  help: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Whether the field is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * Callback function that returns the value of the input when it's changed
   */
  onChangeValue: PropTypes.func,
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

RangeField.defaultProps = {
  step: 1,
  help: null,
  label: null,
  disabled: false,
  onChangeValue: _.noop,
  formatLabel: _.identity,
  meta: { touched: false, error: [] },
};

export default RangeField;
