import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import { Field, FieldArray } from 'redux-form'; // theme css file
import { SortableSectionFieldArray, TextField, Validators } from 'bandit-pouch';
import ReduxForm from '../ReduxForm';

// Knobs
const label = () => text('label', 'SortableSectionFieldArray');
const help = () => text('help', 'To add items to your forms.');
const disabled = () => boolean('disabled', false);
const duplicable = () => boolean('duplicable', false);
const minimizable = () => boolean('minimizable', true);
const emptyMessage = () =>
  text('emptyMessage', 'At least one item is required.');
const addTooltip = () => text('addTooltip', 'Click to add.');

// Actions
const onAdd = () => action('onAdd');
const onRemove = () => action('onRemove');

// Component
const withField = propsFn => (
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
        validate={[Validators.required()]}
      />
    )}
    validate={[Validators.required()]}
    help={help()}
    emptyMessage={<i className="text-muted">{emptyMessage()}</i>}
    onAdd={onAdd()}
    onRemove={onRemove()}
    {...propsFn()}
  />
);

storiesOf('Forms|SortableSectionFieldArray', module)
  .addDecorator(withField)
  .addDecorator(ReduxForm)
  .add('default', () => ({}))
  .add('with disabled', () => ({ disabled: true }))
  .add('with duplicable', () => ({ duplicable: true }))
  .add('with minimizable', () => ({ minimizable: true }))
  .add('Interactive Mode', () => ({
    disabled: disabled(),
    duplicable: duplicable(),
    minimizable: minimizable(),
    addTooltip: addTooltip(),
  }));
