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
  async,
  creatable,
  ...props
}) => {
  const ResolvedSelectComponent = resolveSelectComponent(async, creatable);

  return (
    <ResolvedSelectComponent
      {...props}
    />
  );
};

Select.propTypes = {
  /**
   * Currently selected value. Provide an array of values when multi prop is set.
   */
  value: PropTypes.oneOfType([PropTypes.any, PropTypes.arrayOf(PropTypes.any)]),
  /**
   * Key used to extract the value from the options object.
   */
  valueKey: PropTypes.string,
  /**
   * Key used to extract the label from the options object.
   */
  labelKey: PropTypes.string,
  /**
   * An array of option objects available for selection. If the label is not present, then the
   * value will be displayed. How the value/label will be extracted from the option objects depends on
   * the valueKey and labelKey props respectively. This prop is required, unless async and loadOptions
   * props are set.
   */
  options: PropTypes.arrayOf(PropTypes.any),
  /**
   * Callback used to load options asynchronously. It can also be a Promise. This must be set when in
   * async mode.
   */
  loadOptions: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(Promise)]),
  /**
   * Whether the component should show a loading indicator. This is handled automatically when async prop
   * is set.
   */
  isLoading: PropTypes.bool,
  /**
   * Whether a clear button will be displayed, for easily resetting the value prop.
   */
  clearable: PropTypes.bool,
  /**
   * Whether options can be created by user input when they do not exist already.
   */
  creatable: PropTypes.bool,
  /**
   * Whether multiple values can be selected at once. Otherwise this component will behave as a normal combo box.
   */
  multi: PropTypes.bool,
  /**
   * Whether to load the data from a promise or a callback. Options prop is optional when this is set.
   */
  async: PropTypes.bool,
};

Select.defaultProps = {
  value: null,
  valueKey: 'value',
  labelKey: 'label',
  options: [],
  loadOptions: null,
  isLoading: false,
  clearable: false,
  creatable: false,
  async: false,
  multi: false,
};

export default Select;
