import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import { SortableSectionFieldArray, TextField, Validators } from 'bandit-pouch';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import withForm from '../withForm';

const {required, combine} = Validators;

// Knobs
const label = () => text('label', 'SortableSectionFieldArray');
const help = () => text('help', 'To add items to your forms.');
const disabled = () => boolean('disabled', false);
const duplicable = () => boolean('duplicable', false);
const canAdd = () => boolean('canAdd', true);
const canRemove = () => boolean('canRemove', true);
const minimizable = () => boolean('minimizable', true);
const emptyMessage = () =>
  text('emptyMessage', 'At least one item is required.');
const addTooltip = () => text('addTooltip', 'Click to add.');
const labelDefault = () => text('labelDefault', 'New');

// Actions
const onAdd = () => action('onAdd');
const onRemove = () => action('onRemove');
const onDuplicate = () => action('onDuplicate');

// Component
const withField = propsFn => {
  return (
      <FieldArray
        component={SortableSectionFieldArray}
        name="formField"
        label={label()}
        innerComponent={({ field }) => (
          <Field
            component={TextField}
            name={`${field}.description`}
            label="Description"
            placeholder="Description..."
            validate={combine([required()])}
          />
        )}
        validate={combine([required()])}
        help={help()}
        emptyMessage={<i className="text-muted">{emptyMessage()}</i>}
        canAdd={canAdd()}
        canRemove={canRemove()}
        onAdd={onAdd()}
        onRemove={onRemove()}
        onDuplicate={onDuplicate()}
        {...propsFn()}
      />
  );
};

const parametersWithOneSection = {initialValues: {formField: [{}]}};

// JSDom can't be used to test this, as it rely on refs. Try again once we update react-bootstrap
// (currently on 1.0.0-beta.5).
storiesOf('Forms|SortableSectionFieldArray.DontTest', module)
  .addDecorator(withField)
  .addDecorator(withForm)
  .add('default', () => ({}))
  .add('with disabled', () => ({ disabled: true }))
  .add('with one field', () => ({}), parametersWithOneSection)
  .add('with one field and disabled', () => ({ disabled: true }), parametersWithOneSection)
  .add('with one field and duplicable', () => ({ duplicable: true }), parametersWithOneSection)
  .add('with one field and not canAdd', () => ({ canAdd: false }), parametersWithOneSection)
  .add('with one field and not canRemove', () => ({ canRemove: false }), parametersWithOneSection)
  .add('with one field and not minimizable', () => ({ minimizable: false }), parametersWithOneSection)
  .add('with one field and not initiallyMinimized', () => ({ initiallyMinimized: false }), parametersWithOneSection)
  .add('with one field and labelDefault', () => ({ labelDefault: 'Novo' }), parametersWithOneSection)
  .add('with one field and renderLabel', () => ({
    renderLabel: (value, idx) => `Test ${idx + 1} Test`,
  }), parametersWithOneSection)
  .add('with one field and empty string renderLabel', () => ({
    renderLabel: (value, idx) => '',
  }), parametersWithOneSection)
  .add('with one field and empty string renderLabel/not minimizable', () => ({
    renderLabel: (value, idx) => '',
    minimizable: false,
  }), parametersWithOneSection)
  .add('Interactive Mode', () => ({
    disabled: disabled(),
    duplicable: duplicable(),
    canAdd: canAdd(),
    canRemove: canRemove(),
    minimizable: minimizable(),
    addTooltip: addTooltip(),
    labelDefault: labelDefault(),
    emptyMessage: emptyMessage(),
  }));
