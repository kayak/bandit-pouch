import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';

import { Field } from 'react-final-form';
import { RangeField } from 'bandit-pouch';
import withForm from '../withForm';

// Knobs
const label = () => text('label', 'Rangefield');
const help = () => text('help', 'Type your help text.');
const placeholder = () => text('placeholder', 'Type your placeholder text.');
const disabled = () => boolean('disabled', false);
const step = () => number('step', 1, {
  range: true,
  min: 1,
  max: 10,
  step: 1,
});
const min = () => number('min', 0, {
  range: true,
  min: 0,
  max: 40,
  step: 1,
});
const max = () => number('max', 100, {
  range: true,
  min: 60,
  max: 100,
  step: 1,
});

// Actions
const onChangeValue = () => action('onChangeValue');

// Component
const withField = propsFn => (
  <Field
    component={RangeField}
    name="formField"
    label={label()}
    help={help()}
    placeholder={placeholder()}
    onChangeValue={onChangeValue()}
    {...propsFn()}
  />
);

storiesOf('Forms|RangeField', module)
  .addDecorator(withField)
  .addDecorator(withForm)
  .add('default', () => ({}))
  .add('with disabled', () => ({ disabled: true }))
  .add('with a step of 2', () => ({ step: 2 }))
  .add('with a min of 4', () => ({ min: 4 }))
  .add('with a max of 10', () => ({ max: 10 }))
  .add('with a defaultValue of 50', () => ({ defaultValue: 50 }))
  .add('with a defaultValue of [30, 70]', () => ({ defaultValue: [30, 70] }))
  .add('with marks', () => ({ marks: {0: 'Min', 20: 20, 40: 40, 60: 60, 80: 80, 100: 'Max'} }))
  .add('Interactive Mode', () => ({
    disabled: disabled(),
    step: step(),
    min: min(),
    max: max(),
  }));
