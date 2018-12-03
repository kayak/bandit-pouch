/* eslint-disable no-confusing-arrow, react/no-array-index-key */
import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import {
  ControlLabel,
  FormGroup,
  HelpBlock,
} from 'react-bootstrap';

import FieldError from './FieldError';
import { CHILDREN_PROP_TYPE } from '../utils';

/**
 * Function to define the current validationState of the FormGroup. This is a prop that
 * the FormGroup component in React-Bootstrap expects
 *
 * @param touched Boolean of whether the field has been used (Redux-Form tracks this)
 * @param error Redux form error object
 * @returns {*} - Undefined if the field has not been touched,
 *              - 'error' if an error has been found
 *              - 'success' if there is no error and the field has been touched.
 */
export function getValidationState(touched, error) {
  if (!touched) return undefined;
  // Ensure the error prop is showing a real error. Sometimes an empty array is passed which still
  // indicates there are no errors. If this happens we don't want to use an error class.
  return !_.isEmpty(error) ? 'error' : 'success';
}

/**
 * Component that wraps Bootstrap's FormGroup, ControlLabel and HelpBlock elements
 * in order to show an Form field.
 *
 * Form field also renders a list of errors using the FieldErrors component.
 */
const FormField = ({
  id, label, help, children, className, meta: { touched, error },
}) => {
  const validationState = getValidationState(touched, error);
  // split the error by new line if it is not an array (a string will come back from the grammar validation,
  // whereas an array is returned by the Django API). We split the grammar validation into multiple lines so
  // it will display properly under the field
  const errors = error && _.isString(error) ? error.split('\n') : error;

  return (
    <FormGroup controlId={id} className={className} validationState={validationState}>
      {label && <ControlLabel>{label}</ControlLabel>}

      {children}

      {help && (
        <HelpBlock>
          <small>{help}</small>
        </HelpBlock>
      )}

      { // Only show if field is touched and not empty. Sometimes, the error prop is an empty
        // array so we do not want to show an error for this.
        touched && !_.isEmpty(error) && (
          <FieldError>
            {errors.map((e, i) => i ? <div key={`error-${i}`}>{e}</div> : e)}
          </FieldError>
        )
      }
    </FormGroup>
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
