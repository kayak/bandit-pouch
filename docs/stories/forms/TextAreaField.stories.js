import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';

import { Field } from 'react-final-form';
import { TextAreaField } from 'bandit-pouch';
import withForm from '../withForm';

// Knobs
const label = () => text('label', 'Textareafield');
const placeholder = () => text('placeholder', 'Type your placeholder text.');
const help = () => text('help', 'Type your help text.');
const disabled = () => boolean('disabled', false);
const rows = () =>
  number('rows', 1, {
    range: true,
    min: 1,
    max: 10,
    step: 1,
  });

// Actions
const onChangeValue = () => action('onChangeValue');

// Component
const withField = propsFn => (
  <Field
    component={TextAreaField}
    name="formField"
    label={label()}
    placeholder={placeholder()}
    help={help()}
    onChangeValue={onChangeValue()}
    {...propsFn()}
  />
);

storiesOf('Forms|TextAreaField', module)
  .addDecorator(withField)
  .addDecorator(withForm)
  .add('default', () => ({}))
  .add('with disabled', () => ({ disabled: true }))
  .add('with 10 rows', () => ({ rows: 10 }))
  .add('Interactive Mode', () => ({
    disabled: disabled(),
    rows: rows(),
  }));
