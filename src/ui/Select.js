import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SelectComponent, { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import CreatableSelect from 'react-select/creatable';
import AsyncCreatableSelect from 'react-select/async-creatable';


function resolveSelectComponent(async, creatable) {
  if (async) {
    return creatable ? AsyncCreatableSelect : AsyncSelect;
  }
  return creatable ? CreatableSelect : SelectComponent;
}

export function transformOptions(options) {
  if (_.isNil(options)) return undefined;

  return options.map((option) => {
    // eslint-disable-next-line no-param-reassign
    if (_.isNil(option.label)) option.label = String(option.value);

    return _.mapKeys(option, (optionValue, optionKey) => ({
      disabled: 'isDisabled',
    }[optionKey] || optionKey));
  });
}

export function transformValue(value, multi, options) {
  let transformedValue;
  const hasOptions = !_.isNil(options) && !_.isEmpty(options);

  if (multi) {
    const hasValue = !_.isNil(value) && _.isArray(value) && !_.isEmpty(value);

    if (!hasValue) return transformedValue;

    const valueIsObject = _.isPlainObject(value[0]);

    if (valueIsObject) {
      transformedValue = value;
    } else if (hasOptions) {
      transformedValue = options.filter(
        option => !_.isNil(value) && value.includes(option.value),
      );
    }
  } else {
    const hasValue = !_.isNil(value) && value !== '';

    if (!hasValue) return transformedValue;

    const valueIsObject = _.isPlainObject(value);

    if (valueIsObject) {
      transformedValue = value;
    } else if (hasOptions) {
      transformedValue = _.find(options, { value });
    }
  }

  return transformedValue;
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
  // should be adapted to use the components prop.
  const transformedOptions = transformOptions(options);
  const transformedValue = transformValue(value, multi, transformedOptions);
  const transformedDefaultValue = transformValue(defaultValue, multi, transformedOptions);

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
      classNamePrefix="react-select"
    />
  );
};

/**
 * React-Select allows you to augment layout and functionality by replacing the default components with your own,
 * using the components property.
 *
 * Please checkout `react-select` documentation for component props usage.
 */
Select.OptionComponent = ChildComponent => ({ data, ...innerProps }) => (
  <components.Option {...innerProps}>
    <ChildComponent {...data} />
  </components.Option>
);

/**
 * React-Select allows you to augment layout and functionality by replacing the default components with your own,
 * using the components property.
 *
 * Please checkout `react-select` documentation for component props usage.
 */
Select.MultiValueLabel = ChildComponent => ({ data, ...innerProps }) => (
  <components.MultiValueLabel {...innerProps}>
    <ChildComponent {...data} />
  </components.MultiValueLabel>
);

/**
 * React-Select allows you to augment layout and functionality by replacing the default components with your own,
 * using the components property.
 *
 * Please checkout `react-select` documentation for component props usage.
 */
Select.SingleValue = ChildComponent => ({ data, ...innerProps }) => (
  <components.SingleValue {...innerProps}>
    <ChildComponent {...data} />
  </components.SingleValue>
);

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
   * Whether the menu should be open by default.
   */
  defaultMenuIsOpen: PropTypes.bool,
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
  defaultMenuIsOpen: false,
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
