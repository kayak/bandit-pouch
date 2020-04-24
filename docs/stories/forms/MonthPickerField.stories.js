import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import { Field } from 'react-final-form';
import { MonthPickerField } from 'bandit-pouch';
import withForm from '../withForm';

// Knobs
const label = () => text('label', 'Monthpickerfield');
const help = () => text('help', 'Type your help text.');
const disabled = () => boolean('disabled', false);

// Actions
const onChange = () => action('onChange');

// Component
const withField = propsFn => {
  return (
      <Field
        component={MonthPickerField}
        name="formField"
        label={label()}
        help={help()}
        onChange={onChange()}
        {...propsFn()}
      />
  );
};

const parametersWithInitialValue = {initialValues: {
  formField: '1990-02',
}};

storiesOf('Forms|MonthPickerField', module)
  .addDecorator(withField)
  .addDecorator(withForm)
  .add('default', () => ({}))
  .add('with disabled', () => ({ disabled: true }))
  .add('with value set', () => ({}), parametersWithInitialValue)
  .add('Interactive Mode', () => ({
    disabled: disabled(),
  }));
