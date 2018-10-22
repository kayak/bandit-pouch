import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Button,
  ButtonToolbar,
} from 'react-bootstrap';
import FieldError from './FieldError';

/**
 * Renders a Bootstrap Row component with a Button toolbar on the right hand side.
 * Toolbar contains 2 buttons, one that would reset the form state and one that would
 * submit the form data.
 */
const SubmitResetRow = ({
  enabled, pristine, submitting, submitFailed, error, valid, reset,
}) => (
  <Row>
    <Col xs={12}>
      <ButtonToolbar className="pull-right">
        <Button
          bsStyle="warning"
          bsSize="large"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Reset
        </Button>
        <Button
          bsStyle="primary"
          bsSize="large"
          type="submit"
          disabled={enabled === false || submitting}
        >
          Submit
        </Button>
      </ButtonToolbar>

      {error
        ? <FieldError>{error}</FieldError>
        : (submitFailed && !valid) && <FieldError>The form is invalid. Please fix any errors.</FieldError>}
    </Col>
  </Row>
);

SubmitResetRow.propTypes = {
  /**
   * Is the form enabled
   */
  enabled: PropTypes.bool,
  /**
   * When this property is `false` it means that the forms field values
   * have been changed. Meaning the form is in a `dirty` state.
   */
  pristine: PropTypes.bool,
  /**
   * Is the form being submitted
   */
  submitting: PropTypes.bool,
  /**
   * When this property is `true` it means the form submit hook threw an error
   */
  submitFailed: PropTypes.bool,
  /**
   * When this property is `false` it means that the forms has invalid values
   */
  valid: PropTypes.bool,
  /**
   * Error message to be shown in the component
   */
  error: PropTypes.string,
  /**
   * Callback function invoked when the reset button is clicked
   */
  reset: PropTypes.func.isRequired,
};

SubmitResetRow.defaultProps = {
  enabled: true,
  pristine: true,
  submitting: false,
  submitFailed: false,
  valid: true,
  error: null,
};

export default SubmitResetRow;
