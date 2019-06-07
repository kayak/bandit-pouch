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

// Actions
const onChangeValue = () => action('onChangeValue');

// Utils
function fetchGithubUsers(input) {
  if (!input) {
    return Promise.resolve({ options: [] });
  }

  return fetch(`https://api.github.com/search/users?q=${input}`)
    .then(response => response.json())
    .then(json => json.items.map(item => ({
      label: item.login,
      value: item.id,
    })));
}

function CustomRenderer({value, label}) {
  return (
    <span>
      [Custom Rendered] {label}
      <br />
      Value = "{value}"
    </span>
  );
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

const options = [{
  label: 'Option 1',
  value: '1',
}, {
  label: 'Option 2',
  value: '2',
}];

storiesOf('Forms|SelectField', module)
  .addDecorator(withField)
  .addDecorator(ReduxForm)
  .add('default', () => ({}))
  .add('with value based defaultValue', () => ({
    options,
    defaultValue: '1',
  }))
  .add('with object based defaultValue', () => ({
    options,
    defaultValue: {value: '1', label: 'Object based element #1'},
  }))
  .add('with menu open by default', () => ({
    options,
    defaultMenuIsOpen: true,
  }))
  .add('with disabled options', () => ({
    options: [{
      label: 'Disabled Option 1',
      value: '1',
      disabled: true,
    }],
  }))
  .add('with no label options', () => ({
    options: [{
      value: '1',
    }],
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
  .add('with clearable', () => ({
    options,
    defaultValue: '1',
    clearable: true,
  }))
  .add('with creatable', () => ({ creatable: true }))
  .add('with multi', () => ({
    options,
    multi: true,
  }))
  .add('with defaultValue and custom single value renderer', () => ({
    options,
    components: {
      SingleValue: SelectField.SingleValue(CustomRenderer),
    },
    defaultValue: '1',
  }))
  .add('with defaultValue and custom multi value label renderer', () => ({
    options,
    multi: true,
    components: {
      MultiValueLabel: SelectField.MultiValueLabel(CustomRenderer),
    },
    defaultValue: ['1'],
  }))
  .add('with defaultValue, menu open by default and custom option renderer', () => ({
    options,
    defaultMenuIsOpen: true,
    components: {
      Option: SelectField.OptionComponent(CustomRenderer),
    },
    defaultValue: '1',
  }))
  .add('without onChangeWithValue', () => ({
    options,
    onChangeWithValue: false,
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
