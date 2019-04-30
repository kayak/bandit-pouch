import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import { Field } from 'redux-form'; // theme css file
import { MonthPickerField } from 'bandit-pouch';
import { Form, withStore } from '../ReduxForm';

// Knobs
const label = () => text('label', 'Monthpickerfield');
const help = () => text('help', 'Type your help text.');
const disabled = () => boolean('disabled', false);

// Actions
const onChange = () => action('onChange');

// Component
const withField = propsFn => {
  const { formField='1990-02', ...fieldProps } = propsFn();

  return (
    <Form
      initialValues={{
        formField,
      }}
    >
      <Field
        component={MonthPickerField}
        name="formField"
        label={label()}
        help={help()}
        onChange={onChange()}
        {...fieldProps}
      />
    </Form>
  );
};

storiesOf('Forms|MonthPickerField', module)
  .addDecorator(withField)
  .addDecorator(withStore)
  .add('default', () => ({}))
  .add('with disabled', () => ({ disabled: true }))
  .add('Interactive Mode', () => ({
    disabled: disabled(),
  }));
