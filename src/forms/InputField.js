import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

import FormField from './FormField';

/**
 * Generalized Form Control component.
 *
 * Different component types are usable via the componentClass parameter.  When component is undefined, it'll
 * default as a text field.  Other options:
 *  - textarea
 *  - select (but use the SelectField component instead)
 */
const InputField = ({
  input, label, help, meta, onChangeValue, componentClass, ...props
}) => (
  <FormField id={input.id} label={label} help={help} meta={meta}>
    <FormControl
      {...input}
      {...props}
      componentClass={componentClass}
      onChange={(selected) => {
        input.onChange(selected);
        onChangeValue(selected);
      }}
    />
    <FormControl.Feedback />
  </FormField>
);

InputField.propTypes = {
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
   * Custom element type for this field
   */
  componentClass: FormControl.propTypes.componentClass,
  /**
   * Callback function that returns the value of the input when it's changed
   */
  onChangeValue: PropTypes.func,
};

InputField.defaultProps = {
  help: null,
  label: null,
  meta: { touched: false, error: [] },
  onChangeValue: _.noop,
  componentClass: 'input',
};

export default InputField;
