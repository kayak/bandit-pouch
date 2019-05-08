import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';

import { Field } from 'redux-form'; // theme css file
import { RangeField } from 'bandit-pouch';
import ReduxForm from '../ReduxForm';

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

// JSDom can't be used to test this, as it rely on refs. Try again once we update react-bootstrap
// (currently on 1.0.0-beta.5).
storiesOf('Forms|RangeField.DontTest', module)
  .addDecorator(withField)
  .addDecorator(ReduxForm)
  .add('default', () => ({}))
  .add('with disabled', () => ({ disabled: true }))
  .add('with a step of 2', () => ({ step: 2 }))
  .add('with a min of 4', () => ({ min: 4 }))
  .add('with a max of 10', () => ({ max: 10 }))
  .add('Interactive Mode', () => ({
    disabled: disabled(),
    step: step(),
    min: min(),
    max: max(),
  }));
