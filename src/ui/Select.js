import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SelectComponent from 'react-select';
import AsyncSelect from 'react-select/lib/Async';
import CreatableSelect from 'react-select/lib/Creatable';
import AsyncCreatableSelect from 'react-select/lib/AsyncCreatable';

function resolveSelectComponent(async, creatable) {
  if (async) {
    return creatable ? AsyncCreatableSelect : AsyncSelect;
  }
  return creatable ? CreatableSelect : SelectComponent;
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
  clearable,
  disabled,
  multi,
  value,
  defaultValue,
  options,
  ...props
}) => {
  const ResolvedSelectComponent = resolveSelectComponent(async, creatable);

  // All those manipulations below try to make the most common use cases compatible
  // with react-select v1 api. The renderers are not taken into account, so those
  // should be adpated to use the components prop.
  const transformedOptions = options.map((option) => {
    // eslint-disable-next-line no-param-reassign
    if (_.isNil(option.label)) option.label = String(option.value);

    return _.mapKeys(option, (optionValue, optionKey) => ({
      disabled: 'isDisabled',
    }[optionKey] || optionKey));
  });

  let transformedValue = value;
  let transformedDefaultValue = defaultValue;
  const hasOptions = !_.isEmpty(transformedOptions);

  if (!_.isNil(value) && hasOptions) {
    if (multi) {
      transformedValue = transformedOptions.filter(
        option => !_.isNil(value) && value.includes(option.value),
      );
      transformedDefaultValue = transformedOptions.filter(
        option => !_.isNil(defaultValue) && defaultValue.includes(option.value),
      );
    } else {
      transformedValue = _.find(transformedOptions, { value });
      transformedDefaultValue = _.find(transformedOptions, { value: defaultValue });
    }
  }

  return (
    <ResolvedSelectComponent
      {...props}
      value={transformedValue}
      defaultValue={transformedDefaultValue}
      options={transformedOptions}
      isMulti={multi}
      isDisabled={disabled}
      isClearable={clearable}
      isCreatable={creatable}
    />
  );
};

Select.propTypes = {
  /**
   * Currently selected value. Provide an array of values when multi prop is set.
   */
  value: PropTypes.oneOfType([PropTypes.any, PropTypes.arrayOf(PropTypes.any)]),
  /**
   * The default value in case value is not set on first render.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.any, PropTypes.arrayOf(PropTypes.any)]),
  /**
   * Whether the component is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * An array of option objects available for selection. If the label is not present, then the
   * value will be displayed. This prop is required, unless async and loadOptions
   * props are set.
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      disabled: PropTypes.bool,
    }),
  ),
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
  defaultValue: null,
  disabled: false,
  options: [],
  loadOptions: null,
  isLoading: false,
  clearable: false,
  creatable: false,
  async: false,
  multi: false,
};

export default Select;
