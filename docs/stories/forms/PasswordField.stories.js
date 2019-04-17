import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import { Field } from 'redux-form'; // theme css file
import { PasswordField } from 'bandit-pouch';
import ReduxForm from '../ReduxForm';

// Knobs
const label = () => text('label', 'Passwordfield');
const placeholder = () => text('placeholder', 'Type your placeholder text.');
const help = () => text('help', 'Type your help text.');
const disabled = () => boolean('disabled', false);

// Actions
const onChange = () => action('onChange');

// Component
const withField = propsFn => (
  <Field
    component={PasswordField}
    name="formField"
    label={label()}
    placeholder={placeholder()}
    help={help()}
    onChange={onChange()}
    {...propsFn()}
  />
);

storiesOf('Forms|PasswordField', module)
  .addDecorator(withField)
  .addDecorator(ReduxForm)
  .add('default', () => ({}))
  .add('with disabled', () => ({ disabled: true }))
  .add('Interactive Mode', () => ({
    disabled: disabled(),
  }));
