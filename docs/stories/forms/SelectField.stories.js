import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';

import { Field } from 'redux-form'; // theme css file
import { SelectField } from 'bandit-pouch';
import ReduxForm from '../ReduxForm';

// Knobs
const label = () => text('label', 'Select');
const help = () => text('help', 'Type your help text.');
const placeholder = () => text('placeholder', 'Type your placeholder text.');
const defaultValue = () => text('defaultValue', '1');
const disabled = () => boolean('disabled', false);
const isLoading = () => boolean('isLoading', false);
const clearable = () => boolean('clearable', false);
const creatable = () => boolean('creatable', false);
const multi = () => boolean('multi', false);
const onChangeWithValue = () => boolean('onChangeWithValue', false);
const placement = () =>
  select(
    'placement',
    {
      bottom: 'bottom',
      left: 'left',
      right: 'right',
      top: 'top',
    },
    'bottom'
  );
const numCalendarMonths = () =>
  number('numCalendarMonths', 1, {
    range: true,
    min: 1,
    max: 3,
    step: 1,
  });

// Actions
const onChangeValue = () => action('onChangeValue');

// Utils
function fetchGithubUsers(input) {
  if (!input) {
    return Promise.resolve({ options: [] });
  }

  return fetch(`https://api.github.com/search/users?q=${input}`)
    .then(response => response.json())
    .then(json => {
      return {
        options: json.items.map(item => ({
          label: item.login,
          value: item.id,
        })),
      };
    });
}

// Component
const withField = propsFn => (
  <Field
    component={SelectField}
    name="formField"
    label={label()}
    placeholder={placeholder()}
    help={help()}
    onChangeValue={onChangeValue()}
    {...propsFn()}
  />
);

storiesOf('Forms|SelectField', module)
  .addDecorator(withField)
  .addDecorator(ReduxForm)
  .add('default', () => ({}))
  .add('with defaultValue', () => ({
    options: [{
      label: 'Option 1',
      value: '1'
    }],
    defaultValue: '1',
  }))
  .add('with disabled options', () => ({
    options: [{
      label: 'Disabled Option 1',
      value: '1',
      disabled: true
    }],
  }))
  .add('with options containing labels', () => ({
    options: [{
      label: 'Option 1',
      value: '1'
    }],
  }))
  .add('with options using different labelKey', () => ({
    options: [{
      text: 'Option 1',
      value: '1'
    }],
    labelKey: 'text',
  }))
  .add('with options using different valueKey', () => ({
    options: [{
      label: 'Option 1',
      id: '1'
    }],
    valueKey: 'id',
  }))
  .add('with async', () => ({
    loadOptions: fetchGithubUsers,
    async: true,
    label: 'Github user select',
    placeholder: 'Type a github user login',
    help: 'Select a github user',
  }))
  .add('with disabled', () => ({ disabled: true }))
  .add('with isLoading', () => ({ isLoading: true }))
  .add('with clearable', () => ({ clearable: true }))
  .add('with creatable', () => ({ creatable: true }))
  .add('with multi', () => ({ multi: true }))
  .add('with onChangeWithValue', () => ({
    options: [{
      label: 'Option 1',
      value: '1'
    }],
    onChangeWithValue: true,
  }))
  .add('Interactive Mode', () => ({
    defaultValue: defaultValue(),
    disabled: disabled(),
    isLoading: isLoading(),
    clearable: clearable(),
    creatable: creatable(),
    multi: multi(),
    onChangeWithValue: onChangeWithValue(),
  }));
