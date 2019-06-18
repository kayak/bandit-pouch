import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import { Field, FieldArray } from 'redux-form'; // theme css file
import { KeyValueFieldArray, TextField, Validators } from 'bandit-pouch';
import { Form, withStore } from '../ReduxForm';
import moment from 'moment';

// Knobs
const label = () => text('label', 'KeyValueFieldArray');
const help = () => text('help', 'Type your help text.');
const emptyMessage = () =>
  text('emptyMessage', 'At least one item is required.');
const disabled = () => boolean('disabled', false);

// Actions
const onChange = () => action('onChange');

// Component
const withField = propsFn => {
  const { formField=[], ...fieldProps } = propsFn();

  return (
    <Form
      initialValues={{
        formField: [...formField],
      }}
    >
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
        {...fieldProps}
      />
    </Form>
  );
};

// JSDom can't be used to test this, as it rely on refs. Try again once we update react-bootstrap
// (currently on 1.0.0-beta.9).
storiesOf('Forms|KeyValueFieldArray.DontTest', module)
  .addDecorator(withField)
  .addDecorator(withStore)
  .add('default', () => ({}))
  .add('with disabled', () => ({ disabled: true }))
  .add('with one field', () => ({ formField: [{}] }))
  .add('Interactive Mode', () => ({
    disabled: disabled(),
  }));
