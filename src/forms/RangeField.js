import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import FormField from './FormField';

const parse = value => _.toNumber(value);

const RangeField = ({
  input, label, formatLabel, disabled, help, min, max, step, meta, onChangeValue,
}) => (
  <FormField id={input.id} label={label} help={help} meta={meta}>
    <InputRange
      value={parse(input.value)}
      style={{
        display: 'block',
        width: '100%',
      }}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      formatLabel={formatLabel}
      onChange={(value) => {
        input.onChange(value);
        onChangeValue(value);
      }}
      onChangeComplete={value => input.onBlur(value)}
    />
  </FormField>
);

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
  label: PropTypes.string,
  /**
   * Function used to format the range input label
   */
  formatLabel: PropTypes.func,
  /**
   * Help text used to describe the field's purpose
   */
  help: PropTypes.string,
  /**
   * Is this field disabled
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
