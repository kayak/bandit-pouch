import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import { Field, FieldArray } from 'redux-form'; // theme css file
import { SortableSectionFieldArray, TextField, Validators } from 'bandit-pouch';
import { Form, withStore } from '../ReduxForm';

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
const withField = propsFn => {
  const { formField=[], ...fieldProps } = propsFn();

  return (
    <Form
      initialValues={{
        formField: [...formField],
      }}
    >
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
    </Form>
  );
};

// JSDom can't be used to test this, as it rely on refs. Try again once we update react-bootstrap
// (currently on 1.0.0-beta.5).
storiesOf('Forms|SortableSectionFieldArray.DontTest', module)
  .addDecorator(withField)
  .addDecorator(withStore)
  .add('default', () => ({}))
  .add('with disabled', () => ({ disabled: true }))
  .add('with one field and disabled', () => ({ formField: [{}] }))
  .add('with one field and duplicable', () => ({ formField: [{}], duplicable: true }))
  .add('with one field and not minimizable', () => ({ formField: [{}], minimizable: false }))
  .add('with one field and not initiallyMinimized', () => ({ formField: [{}], initiallyMinimized: false }))
  .add('with one field and labelDefault', () => ({ formField: [{}], labelDefault: 'Novo' }))
  .add('with one field and renderLabel', () => ({
    formField: [{}],
    renderLabel: (value, idx) => `Test ${idx + 1} Test`,
  }))
  .add('with one field and empty string renderLabel', () => ({
    formField: [{}],
    renderLabel: (value, idx) => '',
  }))
  .add('with one field and empty string renderLabel/not minimizable', () => ({
    formField: [{}],
    renderLabel: (value, idx) => '',
    minimizable: false,
  }))
  .add('Interactive Mode', () => ({
    disabled: disabled(),
    duplicable: duplicable(),
    minimizable: minimizable(),
    addTooltip: addTooltip(),
  }));
