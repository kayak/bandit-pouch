import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import { KeyValueFieldArray, TextField, Validators } from 'bandit-pouch';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import withForm from '../withForm';

const {required, combine} = Validators;

// Knobs
const label = () => text('label', 'KeyValueFieldArray');
const help = () => text('help', 'Type your help text.');
const emptyMessage = () =>
  text('emptyMessage', 'At least one item is required.');
const disabled = () => boolean('disabled', false);
const canAdd = () => boolean('canAdd', true);
const canRemove = () => boolean('canRemove', true);

// Component
const withField = propsFn => {
  return (
      <FieldArray
        component={KeyValueFieldArray}
        name="formField"
        label={label()}
        keyField={({ field }) => (
          <Field
            component={TextField}
            name={`${field}.metric`}
            placeholder="Metric..."
            validate={combine([required()])}
          />
        )}
        valueField={({ field }) => (
          <Field
            component={TextField}
            name={`${field}.description`}
            placeholder="Description..."
            validate={combine([required()])}
          />
        )}
        validate={combine([required()])}
        canAdd={canAdd()}
        canRemove={canRemove()}
        help={help()}
        emptyMessage={<i className="text-muted">{emptyMessage()}</i>}
        {...propsFn()}
      />
  );
};

const parametersWithOneSection = {initialValues: {formField: [{}]}};

// JSDom can't be used to test this, as it rely on refs. Try again once we update react-bootstrap
// (currently on 1.0.0-beta.5).
storiesOf('Forms|KeyValueFieldArray.DontTest', module)
  .addDecorator(withField)
  .addDecorator(withForm)
  .add('default', () => ({}))
  .add('with disabled', () => ({ disabled: true }))
  .add('with one field', () => ({}), parametersWithOneSection)
  .add('with one field and disabled', () => ({ disabled: true }), parametersWithOneSection)
  .add('with one field and not canAdd', () => ({ canAdd: false }), parametersWithOneSection)
  .add('with one field and not canRemove', () => ({ canRemove: false }), parametersWithOneSection)
  .add('Interactive Mode', () => ({
    disabled: disabled(),
    canAdd: canAdd(),
    canRemove: canRemove(),
    emptyMessage: emptyMessage(),
  }));
