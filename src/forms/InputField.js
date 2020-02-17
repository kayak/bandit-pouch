import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

import FormField, { formControlValidationStates } from './FormField';

/**
 * Generalized Form Control component.
 *
 * Different component types are usable via the as parameter.  When component is undefined, it'll
 * default as a text field.  Other options:
 *  - textarea
 *  - select (but use the SelectField component instead)
 */
function InputField({
  input, label, help, meta, as, onChangeValue, ...props
}) {
  const [value, setValue] = React.useState(input.value);

  React.useEffect(() => setValue(input.value), [input]);

  const onChange = React.useCallback((event) => {
    setValue(event.target.value);
  });

  const onBlur = React.useCallback(() => {
    // React-final-form requires onChange to be called in order to set the value. Before, when using redux-forms,
    // onBlur would implicitly do that.
    input.onChange(value);
    input.onBlur(value);
    if (onChangeValue) onChangeValue(value);
  }, [value]);

  return (
    <FormField id={input.id} label={label} help={help} meta={meta}>
      <FormControl
        {...input}
        {...props}
        value={value}
        as={as}
        onChange={onChange}
        onBlur={onBlur}
        {...formControlValidationStates(meta)}
      />
    </FormField>
  );
}

InputField.propTypes = {
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
   * Custom element type for this field
   */
  as: PropTypes.string,
  /**
   * Callback function that returns the value of the input when it's changed
   */
  onChangeValue: PropTypes.func,
};

InputField.defaultProps = {
  help: null,
  label: null,
  disabled: false,
  meta: { touched: false, error: [] },
  onChangeValue: _.noop,
  as: 'input',
};

export default InputField;
