import _ from 'lodash';
import React, { Component } from 'react';
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
class InputField extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  state = {
    value: _.get(this.props, 'input.value'),
  };

  componentWillReceiveProps(nextProps) {
    if (_.get(this.props, 'input.value') !== _.get(nextProps, 'input.value')) {
      this.setState({
        value: nextProps.input.value,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const prevProps = this.props;
    const prevState = this.state;

    return (
      _.get(prevProps, 'label') !== _.get(nextProps, 'label')
      || _.get(prevProps, 'help') !== _.get(nextProps, 'help')
      || _.get(prevProps, 'meta.touched') !== _.get(nextProps, 'meta.touched')
      || _.get(prevProps, 'meta.error') !== _.get(nextProps, 'meta.error')
      || !_.isEqual(prevState, nextState)
    );
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  onBlur() {
    const { input, onChangeValue } = this.props;
    const { value } = this.state;
    input.onBlur(value);
    if (onChangeValue) onChangeValue(value);
  }

  render() {
    const {
      input, label, help, meta, componentClass, onChangeValue, ...props
    } = this.props;
    const { value } = this.state;

    return (
      <FormField id={input.id} label={label} help={help} meta={meta}>
        <FormControl
          {...input}
          {...props}
          value={value}
          componentClass={componentClass}
          onChange={this.onChange}
          onBlur={this.onBlur}
        />
        <FormControl.Feedback />
      </FormField>
    );
  }
}

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
