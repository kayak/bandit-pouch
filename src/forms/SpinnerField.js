import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';

/**
 * A generic numeric spinner input Redux Form component which uses a React Bootstrap FormControl.
 * This component is meant to be passed into a Redux Forms Field component.
 */
const SpinnerField = ({
  input, label, placeholder, min, max, step, disabled, help, meta, onChangeValue,
}) => (
  <InputField
    componentClass="input"
    type="number"
    placeholder={placeholder}
    input={input}
    label={label}
    min={min}
    max={max}
    step={step || 1}
    help={help}
    meta={meta}
    disabled={disabled}
    onChange={onChangeValue}
  />
);

SpinnerField.propTypes = {
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
   * Help text used to describe the field's purpose
   */
  help: PropTypes.string,
  /**
   * Callback function that returns the value of the input when it's changed
   */
  onChangeValue: PropTypes.func,
  /**
   * Is this field disabled
   */
  disabled: PropTypes.bool,
  /**
   * Placeholder text for textarea input field
   */
  placeholder: PropTypes.string,
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

SpinnerField.defaultProps = {
  step: 1,
  help: null,
  label: null,
  disabled: false,
  placeholder: null,
  onChangeValue: _.noop,
  meta: { touched: false, error: [] },
};

export default SpinnerField;
