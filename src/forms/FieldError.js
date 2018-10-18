import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { CHILDREN_PROP_TYPE } from '../utils';

/**
 * Component meant for displaying errors below fields in a form
 */
const FieldError = ({ style = {}, children = [] }) => (
  <strong className="text-danger" style={style}>
    <FontAwesome name="warning" />
    &nbsp;
    <span className="validation-error">{children}</span>
  </strong>
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
