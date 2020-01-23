import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Select from '../ui/Select';
import FormField from './FormField';

export const transformMultiValue = selection => (_.isNil(selection) ? [] : _.map(selection, 'value'));

export const transformSingularValue = selection => (_.isNil(selection) ? null : selection.value);

/**
 * Component that encapsulates the `react-select` component.
 */
const SelectField = ({
  input,
  label,
  defaultValue,
  help,
  meta,
  multi,
  async,
  creatable,
  onChangeValue,
  onChangeWithValue = true,
  ...props
}) => (
  <FormField id={input.id} label={label} help={help} meta={meta}>
    <Select
      {...props}
      name={input.name}
      value={input.value}
      defaultValue={defaultValue}
      async={async}
      multi={multi}
      creatable={creatable}
      onChange={(selection) => {
        let value = selection;
        if (multi && _.isNil(value)) value = [];

        // Passing the onChangeWithValue prop means the React-Select 'value' key will be used
        // onChangeValue.  If this is false, the entire option object is stored, meaning additional data
        // can be stored onChangeValue if needed.
        if (onChangeWithValue && !async && !creatable) {
          if (multi) {
            value = transformMultiValue(selection);
          } else {
            value = transformSingularValue(selection);
          }
        }

        input.onChange(value);
        if (onChangeValue) onChangeValue(value);
      }}
      onBlur={() => input.onBlur()}
      onFocus={() => input.onFocus()}
    />
  </FormField>
);

SelectField.OptionComponent = Select.OptionComponent;
SelectField.MultiValueLabel = Select.MultiValueLabel;
SelectField.SingleValue = Select.SingleValue;

SelectField.propTypes = {
  /**
   * Original input field passed by the React Form
   */
  input: PropTypes.any.isRequired,
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
   * The default value in case value is not set on first render.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.any, PropTypes.arrayOf(PropTypes.any)]),
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
  disabled: false,
  meta: { touched: false, error: [] },
  defaultValue: null,
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
