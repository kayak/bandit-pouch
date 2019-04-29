import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { SubmitResetRow } from 'bandit-pouch';
import ReduxForm from '../ReduxForm';

// Knobs
const valid = () => boolean('valid', true);
const submitFailed = () => boolean('submitFailed', true);
const submitting = () => boolean('submitting', true);
const pristine = () => boolean('pristine', true);
const enabled = () => boolean('enabled', true);
const error = () => text('error', undefined);

// Actions
const reset = () => action('reset');

// Component
const withField = propsFn => <SubmitResetRow reset={reset()} {...propsFn()} />;

storiesOf('Forms|SubmitResetRow', module)
  .addDecorator(withField)
  .addDecorator(ReduxForm)
  .add('default', () => ({}))
  .add('with enabled as false', () => ({ enabled: false }))
  .add('with pristine as false', () => ({ pristine: false }))
  .add('with submitting', () => ({ submitting: true }))
  .add('with submitFailed and error', () => ({
    error: 'The error X ocurred.',
    submitFailed: true,
  }))
  .add('with submitFailed and no error', () => ({ submitFailed: true }))
  .add('with valid as false and error', () => ({
    error: 'The error X ocurred.',
    valid: false,
  }))
  .add('with valid as false and no error', () => ({ valid: false }))
  .add('with error', () => ({ error: 'The error X ocurred.' }))
  .add('Interactive Mode', () => ({
    enabled: enabled(),
    pristine: pristine(),
    submitting: submitting(),
    submitFailed: submitFailed(),
    error: error(),
    valid: valid(),
  }));
