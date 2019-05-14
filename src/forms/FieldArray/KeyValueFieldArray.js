import PropTypes from 'prop-types';
import React from 'react';
import { Button, Col, InputGroup } from 'react-bootstrap';
import { FormSection } from 'redux-form';
import FontAwesome from 'react-fontawesome';
import { FormField, MagicRow, Tooltip } from '../..';
import { fieldArrayButtonBsStyle, fieldArrayMeta } from './meta';

/**
 * Component that renders a key-value field array.
 */
const KeyValueFieldArray = ({
  fields, meta, label, help, disabled, keyField, valueField, emptyMessage,
}) => {
  const buttonBsStyle = fieldArrayButtonBsStyle(meta);

  return (
    <FormField
      label={(
        <span>
          {label}

          <Button
            size="sm"
            variant={buttonBsStyle}
            style={{ marginLeft: 6 }}
            disabled={disabled}
            onClick={() => fields.push({})}
          >
            <FontAwesome name="plus" />
          </Button>
        </span>
      )}
      help={help}
      meta={fieldArrayMeta(meta)}
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
                {valueField}

                <InputGroup.Append>
                  <Tooltip text="Remove">
                    <Button
                      style={{ height: 38 }}
                      variant={buttonBsStyle}
                      disabled={disabled}
                      onClick={() => fields.remove(idx)}
                    >
                      <FontAwesome name="remove" />
                    </Button>
                  </Tooltip>
                </InputGroup.Append>
              </InputGroup>
            </FormSection>
          </Col>
        ))}
      </MagicRow>

      {emptyMessage && fields.length === 0 && emptyMessage}
    </FormField>
  );
};

KeyValueFieldArray.propTypes = {
  /**
   * Fields object passed by the React Form
   */
  fields: PropTypes.object.isRequired,
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
   * The element/text that will be displayed when no element exist
   */
  emptyMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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
  disabled: false,
  emptyMessage: null,
  meta: { touched: false, error: [] },
};

export default KeyValueFieldArray;
