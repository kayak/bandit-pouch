import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { FormControl } from 'react-bootstrap';
import { FormField } from 'bandit-pouch';

// Knobs
const label = () => text('label', 'Formfield');
const help = () => text('help', 'Type your help text.');

// Actions

// Component
const withComponent = propsFn => (
    <FormField
      label={label()}
      help={help()}
      {...propsFn()}
    >
      <FormControl />
    </FormField>
);

storiesOf('Forms|FormField', module)
  .addDecorator(withComponent)
  .add('default', () => ({}))
  .add('with an error but not touched', () => ({meta: {touched: false, error: 'You won\'t see this'}}))
  .add('with a string error', () => ({meta: {touched: true, error: 'This has errored'}}))
  .add('with a multi line string error',() => ({
    meta: {touched: true, error: 'That\'s a\nvery complex\nerror\nfor a single line'},
  }))
  .add('with a list error', () => ({meta: {touched: true, error: ['This is wrong', 'That is wrong too']}}))
  .add('with an empty list error', () => ({meta: {touched: true, error: []}}))
  .add('with an empty string error', () => ({meta: {touched: true, error: ''}}))
  .add('with an undefined error', () => ({meta: {touched: true, error: undefined}}))
  .add('with a null error', () => ({meta: {touched: true, error: null}}))
  .add('with a list of null/undefined/empty string error',
    () => ({meta: {touched: true, error: [null, undefined, '']}}),
  );
