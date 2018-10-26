import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Col,
  FormControl,
  Glyphicon,
  InputGroup,
  OverlayTrigger,
} from 'react-bootstrap';

import { FormSection } from 'redux-form';

import { MagicRow } from '../../ui';
import { Utils } from '../..';
import FormField from '../FormField';


/**
 * Component that renders a key-value field array.
 */
const KeyValueFieldArray = ({
  fields, meta, label, help, keyField, valueField, emptyMessage,
}) => (
  <FormField
    label={(
      <span>
        {label}

        <Button
          onClick={() => fields.push({})}
          bsSize="xs"
          style={{ marginLeft: 6 }}
        >
          <Glyphicon glyph="plus" />
        </Button>
      </span>
    )}
    help={help}
    meta={meta}
  >
    <MagicRow colSizeKey="md">
      {fields.map((field, idx) => (
        <Col
          key={field}
          xs={12}
          sm={6}
          md={4}
          style={{ marginBottom: 15 }}
        >
          <FormSection name={field}>
            <InputGroup>
              {keyField}

              <InputGroup.Addon style={{
                borderLeft: 0,
                borderRight: 0,
                padding: '6px 3px',
              }}
              />

              {valueField}

              <InputGroup.Button>
                <OverlayTrigger
                  placement="top"
                  overlay={Utils.tooltip('Remove')}
                >
                  <Button onClick={() => fields.remove(idx)}>
                    <Glyphicon glyph="remove" />
                  </Button>
                </OverlayTrigger>
              </InputGroup.Button>
            </InputGroup>
          </FormSection>
        </Col>
      ))}
    </MagicRow>

    {emptyMessage && fields.length === 0 && emptyMessage}
    <FormControl.Feedback />
  </FormField>
);

KeyValueFieldArray.propTypes = {
  /**
   * Fields object passed by the React Form
   */
  fields: PropTypes.object.isRequired,
  /**
   * Input field label
   */
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
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
   * The element/text that will be displayed when no element exist
   */
  emptyMessage: PropTypes.element,
  /**
   * A custom element that will be rendered as the key part.
   */
  keyField: PropTypes.element.isRequired,
  /**
   * A custom element that will be rendered as the value part.
   */
  valueField: PropTypes.element.isRequired,
};

KeyValueFieldArray.defaultProps = {
  help: null,
  label: null,
  emptyMessage: null,
  meta: { touched: false, error: [] },
};

export default KeyValueFieldArray;
