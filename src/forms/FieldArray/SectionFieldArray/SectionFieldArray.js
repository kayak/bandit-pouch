import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  FormControl,
  Glyphicon,
  OverlayTrigger,
} from 'react-bootstrap';
import { DropdownButton } from '../../../ui';
import { Utils } from '../../..';
import FormField from '../../FormField';
import FieldArrayElement from '../FieldArrayElement';

/**
 * Component that renders a section field array using the provided innerComponent prop as its elements.
 */
class SectionFieldArray extends Component {
  static propTypes = {
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
     * The component that will be rendered as an element
     */
    innerComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    /**
     * This label is used in the default renderKey prop. It is the prefix used in the element name
     */
    labelDefault: PropTypes.string,
    /**
     * The tooltip that will be displayed when hovering over the add button
     */
    addTooltip: PropTypes.string,
    /**
     * If elements are able to be minimized or not
     */
    minimizable: PropTypes.bool,
    /**
     * If a minimizable component should be initially minimized or not
     */
    initiallyMinimized: PropTypes.bool,
    /**
     * If elements are able to be duplicated or not
     */
    duplicable: PropTypes.bool,
    /**
     * A function that receives the value object and its index and returns an element to be displayed as the element
     * header
     */
    // eslint-disable-next-line react/require-default-props
    renderLabel: PropTypes.func,
    /**
     * The initial field object that should be used when onAdd is not defined.
     */
    initialFieldValue: PropTypes.object,
    /**
     * Callback function that transforms and adds a new element. If not defined, initialFieldValue will be used
     * instead. Callback receives no argument and should return the new object object.
     */
    onAdd: PropTypes.func,
    /**
     * Callback function that transforms the current element into a duplicated one and adds it. Callback receives
     * the current object as argument and should return the new object.
     */
    onDuplicate: PropTypes.func,
  };

  static defaultProps = {
    help: null,
    label: null,
    disabled: false,
    emptyMessage: null,
    meta: { touched: false, error: [] },
    labelDefault: 'New',
    addTooltip: 'Click to add',
    minimizable: true,
    initiallyMinimized: true,
    duplicable: false,
    initialFieldValue: {},
    onAdd: null,
    onDuplicate: null,
  };

  state = {
    firstRender: true,
  };

  componentDidMount() {
    this.setState({ firstRender: false });
  }

  renderField(field, index) {
    const
      {
        fields,
        innerComponent: InnerComponent,
        innerProps,
        labelDefault,
        renderKey = (value, idx) => idx,
        renderLabel = (value, idx) => `${labelDefault} ${idx + 1}`,
        bsStyle,
        minimizable,
        initiallyMinimized,
        duplicable,
        onDuplicate,
        onRemove,
      } = this.props;

    const {
      firstRender,
    } = this.state;

    const value = fields.get(index);
    const key = renderKey(value, index);
    const label = renderLabel(value, index);

    const content = (
      <InnerComponent
        {...innerProps}
        index={index}
        field={field}
      />
    );

    return (
      <FieldArrayElement
        key={key}
        label={label}
        bsStyle={bsStyle}
        initiallyMinimized={initiallyMinimized && firstRender}
        minimizable={minimizable}
        duplicable={duplicable}
        onRemove={() => {
          if (onRemove) onRemove(index);
          fields.remove(index);
        }}
        onDuplicate={() => {
          const currentValue = fields.get(index);
          const item = onDuplicate ? onDuplicate(currentValue) : currentValue;
          fields.push(item);
        }}
      >
        {content}
      </FieldArrayElement>
    );
  }

  render() {
    const
      {
        label,
        fields,
        meta,
        help,
        disabled,
        initialFieldValue,
        addTooltip,
        addChoices,
        onAdd,
        emptyMessage,
      } = this.props;

    const pushItem = (selected) => {
      const item = onAdd ? onAdd(selected) : initialFieldValue;
      fields.push(item);
    };

    const fieldArray = fields.map((field, index) => this.renderField(field, index));

    return (
      <FormField
        label={(
          <span>
            {label}
          </span>
        )}
        help={help}
        meta={meta}
      >
        {fieldArray}

        {emptyMessage && fields.length === 0 && (
          <div style={{ textAlign: 'center', margin: '10px 0px' }}>{emptyMessage}</div>
        )}
        <OverlayTrigger
          placement="top"
          overlay={Utils.tooltip(addTooltip)}
        >
          <DropdownButton
            className="text-center"
            title={<Glyphicon glyph="plus" />}
            style={{ display: 'block' }}
            bsStyle="primary"
            disabled={disabled || (addChoices && addChoices.length === 0)}
            onSelect={pushItem}
          >
            {addChoices}
          </DropdownButton>
        </OverlayTrigger>
        <FormControl.Feedback />
      </FormField>
    );
  }
}

export default SectionFieldArray;
