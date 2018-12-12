import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Select from '../ui/Select';
import FormField from './FormField';

/**
 * Component that encapsulates the `react-select` component.
 */
const SelectField = ({
  input,
  label,
  defaultValue,
  help,
  meta,
  valueKey,
  multi,
  onChangeValue,
  innerRef,
  onChangeWithValue = true,
  ...props
}) => (
  <FormField id={input.id} label={label} help={help} meta={meta}>
    <Select
      {...props}
      value={input.value || defaultValue}
      multi={multi}
      valueKey={valueKey}
      onChange={(selection) => {
        let value = selection;

        // Passing the onChangeWithValue prop means the React-Select 'value' key will be used
        // onChangeValue.  If this is false, the entire option object is stored, meaning additional data
        // can be stored onChangeValue if needed.
        if (onChangeWithValue) {
          value = multi
            ? selection && _.map(selection, valueKey)
            : selection && selection[valueKey];
        }

        input.onChange(value);
        if (onChangeValue) onChangeValue(value);
      }}
      onBlur={() => input.onBlur()}
      onFocus={() => input.onFocus()}
      ref={innerRef}
    />
  </FormField>
);

SelectField.propTypes = {
  /**
   * Original input field passed by the React Form
   */
  input: PropTypes.any.isRequired,
  /**
   * Input field label
   */
  label: PropTypes.string,
  /**
   * Help text used to describe the field's purpose
   */
  help: PropTypes.string,
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
  /**
   * Key used to extract the value from the options object.
   */
  valueKey: PropTypes.string,
  /**
   * Key used to extract the label from the options object.
   */
  labelKey: PropTypes.string,
  /**
   * The default value for the select field.
   */
  defaultValue: PropTypes.string,
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
   * Whether the component should show a loading indicator. This is handled automatycally when async prop
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
  /**
   * Callback function that returns the value of the input when it's changed.
   */
  onChangeValue: PropTypes.func,
  /**
   * Passing the onChangeWithValue prop means the React-Select 'value' key will be used
   * onChangeValue.
   *
   * If this is false, the entire option object is stored, meaning additional data
   * can be stored onChangeValue if needed.
   */
  onChangeWithValue: PropTypes.bool,
};

SelectField.defaultProps = {
  help: null,
  label: null,
  meta: { touched: false, error: [] },
  defaultValue: null,
  valueKey: 'value',
  labelKey: 'label',
  options: [],
  loadOptions: null,
  isLoading: false,
  clearable: false,
  creatable: false,
  async: false,
  multi: false,
  onChangeValue: null,
  onChangeWithValue: true,
};

export default SelectField;
