import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import FormField from './FormField';


const handle = (props) => {
  const {
    value,
    dragging,
    index,
    ...restProps
  } = props;

  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Slider.Handle value={value} {...restProps} />
    </Tooltip>
  );
};


export default class RangeField extends Component {
  state = {
    value: _.get(this.props, 'input.value'),
  };

  constructor(...args) {
    super(...args);

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (_.get(this.props, 'input.value') !== _.get(nextProps, 'input.value')) {
      this.setState({
        value: nextProps.input.value,
      });
    }
  }

  onChange(value) {
    const {
      input, onChangeValue,
    } = this.props;

    input.onChange(value);
    if (onChangeValue) onChangeValue(value);
  }

  onBlur(newValue) {
    const { input } = this.props;
    input.onBlur(newValue);
  }

  render() {
    const {
      id, className, style, label, help, min, max, step, disabled, meta,
    } = this.props;
    const { value } = this.state;

    return (
      <FormField
        id={id}
        className={className}
        style={style}
        label={label}
        help={help}
        meta={meta}
      >
        <Slider
          defaultValue={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          handle={handle}
          onChange={this.onChange}
          onAfterChange={this.onBlur}
        />
      </FormField>
    );
  }
}

RangeField.propTypes = {
  /**
   * HTML id attribute
   */
  id: PropTypes.string,
  /**
   * HTML class attribute
   */
  className: PropTypes.string,
  /**
   * HTML style attribute
   */
  style: PropTypes.object,
  /**
   * Original input field passed by the React Form
   */
  input: PropTypes.any.isRequired,
  /**
   * Minimum value
   */
  min: PropTypes.number,
  /**
   * Maximum value
   */
  max: PropTypes.number,
  /**
   * Counter step
   */
  step: PropTypes.number,
  /**
   * Input field label
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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
  id: undefined,
  className: undefined,
  style: {},
  step: 1,
  min: undefined,
  max: undefined,
  help: null,
  label: null,
  disabled: false,
  onChangeValue: _.noop,
  meta: { touched: false, error: [] },
};
