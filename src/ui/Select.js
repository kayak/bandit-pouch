import React from 'react';
import PropTypes from 'prop-types';
import SelectComponent from 'react-select';

function resolveSelectComponent(async, creatable) {
  if (async) {
    return creatable ? SelectComponent.AsyncCreatable : SelectComponent.Async;
  }
  return creatable ? SelectComponent.Creatable : SelectComponent;
}

/**
 * Component that behaves as a wrapper around `react-select` component in order
 * to create a unified API between different version of the original component.
 *
 * Please checkout `react-select` documentation for usage.
 */
const Select = ({
  value,
  options,
  valueKey,
  labelKey,
  multi,
  async,
  creatable,
  ...props
}) => {
  const ResolvedSelectComponent = resolveSelectComponent(async, creatable);

  return (
    <ResolvedSelectComponent
      {...props}
      multi={multi}
      value={value}
      options={options}
      valueKey={valueKey}
      labelKey={labelKey}
    />
  );
};

Select.propTypes = {
  /**
   * Currently selected value
   */
  value: PropTypes.string,
  /**
   * Key used to extract the value from the options object. Defaults to `value`
   */
  valueKey: PropTypes.string,
  /**
   * Key used to extract the label from the options object. Defaults to `label`
   */
  labelKey: PropTypes.string,
  /**
   * Available select options
   */
  options: PropTypes.arrayOf(PropTypes.any),
  /**
   * Callback used to load options asynchronously. It can also be a Promise
   */
  loadOptions: PropTypes.func,
  /**
   * Should the value from the select's input field be created when it's missing in the options
   */
  creatable: PropTypes.bool,
  /**
   * Should this component accept multiple values
   */
  multi: PropTypes.bool,
  /**
   * Loads the data from a promise or a callback
   */
  async: PropTypes.bool,
};

Select.defaultProps = {
  value: null,
  valueKey: 'value',
  labelKey: 'label',
  options: [],
  loadOptions: null,
  creatable: false,
  async: false,
  multi: false,
};

export default Select;
