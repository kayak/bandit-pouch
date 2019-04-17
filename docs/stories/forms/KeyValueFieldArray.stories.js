import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import { Field, FieldArray } from 'redux-form'; // theme css file
import { KeyValueFieldArray, TextField, Validators } from 'bandit-pouch';
import ReduxForm from '../ReduxForm';

// Knobs
const label = () => text('label', 'KeyValueFieldArray');
const help = () => text('help', 'Type your help text.');
const emptyMessage = () =>
  text('emptyMessage', 'At least one item is required.');
const disabled = () => boolean('disabled', false);

// Actions
const onChange = () => action('onChange');

// Component
const withField = propsFn => (
  <FieldArray
    component={KeyValueFieldArray}
    name="formField"
    label={label()}
    keyField={
      <Field
        component={TextField}
        name="metric"
        placeholder="Metric..."
        validate={[Validators.required()]}
      />
    }
    valueField={
      <Field
        component={TextField}
        name="description"
        placeholder="Description..."
        validate={[Validators.required()]}
      />
    }
    validate={[Validators.required()]}
    help={help()}
    emptyMessage={<i className="text-muted">{emptyMessage()}</i>}
    {...propsFn()}
  />
);

storiesOf('Forms|KeyValueFieldArray', module)
  .addDecorator(withField)
  .addDecorator(ReduxForm)
  .add('default', () => ({}))
  .add('with disabled', () => ({ disabled: true }))
  .add('Interactive Mode', () => ({
    disabled: disabled(),
  }));
