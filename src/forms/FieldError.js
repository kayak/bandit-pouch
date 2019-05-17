import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from 'react-bootstrap';
import { CHILDREN_PROP_TYPE } from '../utils';

/**
 * Component meant for displaying errors below fields in a form
 */
const FieldError = ({ style = {}, children = [] }) => (
  <Form.Control.Feedback type="invalid" style={style}>
    <FontAwesomeIcon icon="exclamation-circle" />
    &nbsp;
    <small className="validation-error">{children}</small>
  </Form.Control.Feedback>
);

FieldError.propTypes = {
  /**
   * Custom CSS style object
   */
  style: PropTypes.object,
  /**
   * Field Error message
   */
  children: CHILDREN_PROP_TYPE.isRequired,
};

FieldError.defaultProps = {
  style: null,
};

export default FieldError;
