/* eslint-disable no-confusing-arrow, react/no-array-index-key */
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
} from 'react-bootstrap';

import FieldError from './FieldError';
import { CHILDREN_PROP_TYPE, isValidValue } from '../utils';

const VALIDATION_CLASS_NAME = { valid: 'text-success', invalid: 'text-danger' };

function generateErrorArray(error) {
  if (!isValidValue(error)) {
    return [];
  }

  // Split the error by new line if it is not an array (a string will come back from the grammar validation,
  // whereas an array is returned by the Django API). We split the grammar validation into multiple lines so
  // it will display properly under the field.
  return (error && _.isString(error)) ? error.split('\n') : error;
}

function formatErrors({ error = [], submitError = [] }) {
  return [
    ...generateErrorArray(error),
    ...generateErrorArray(submitError),
  ].filter(isValidValue);
}

function hasErrors(formatedErrors) {
  return !_.isEmpty(formatedErrors);
}

export function formControlValidationStates({ touched = false, ...metaRest }) {
  const formatedErrors = formatErrors(metaRest);
  const isInvalid = hasErrors(formatedErrors);

  return {
    isValid: touched && !isInvalid ? true : undefined,
    isInvalid: touched && isInvalid ? true : undefined,
  };
}

/**
 * Component that wraps Bootstrap's FormGroup, ControlLabel and HelpBlock elements
 * in order to show an Form field.
 *
 * Form field also renders a list of errors using the FieldErrors component.
 */
const FormField = ({
  id, label, help, children, className, meta,
}) => {
  const formatedErrors = formatErrors(meta);
  const isInvalid = hasErrors(formatedErrors);
  const willDisplayErrors = meta.touched && isInvalid;
  const validationState = isInvalid ? 'invalid' : 'valid';

  return (
    <Form.Group controlId={id} className={className}>
      {label && <Form.Label>{label}</Form.Label>}

      {children}

      {help && (
        <Form.Text className={meta.touched ? VALIDATION_CLASS_NAME[validationState] : 'text-muted'}>
          {help && help}
        </Form.Text>
      )}

      {willDisplayErrors && (
        <FieldError>
          {formatedErrors.map((e, i) => i ? <div key={`error-${i}`}>{e}</div> : e)}
        </FieldError>
      )}
    </Form.Group>
  );
};

FormField.propTypes = {
  /**
   * Input element id
   */
  id: PropTypes.any,
  /**
   * Input label text
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Input help text
   */
  help: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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
   * Additional class name
   */
  className: PropTypes.string,
  /**
   * The form field component
   */
  children: CHILDREN_PROP_TYPE.isRequired,
};

FormField.defaultProps = {
  id: null,
  help: null,
  label: null,
  className: null,
  meta: { touched: false, error: [] },
};

export default FormField;
