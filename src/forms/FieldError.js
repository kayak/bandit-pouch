import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from 'react-bootstrap';
import { CHILDREN_PROP_TYPE } from '../utils';

/**
 * Component meant for displaying errors below fields in a form
 */
const FieldError = ({ style = {}, children = [] }) => (
  <Form.Control.Feedback className="d-block" type="invalid" style={style}>
    <div className="d-flex flex-row">
      <div style={{ width: 18 }}>
        <FontAwesomeIcon icon="exclamation-circle" />
      </div>
      <div className="w-100">
        <small className="validation-error">{children}</small>
      </div>
    </div>
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
