import React from 'react';

import { storiesOf } from '@storybook/react';
import { number, object } from '@storybook/addon-knobs';
import { NotificationList } from 'bandit-pouch';
import { action } from '@storybook/addon-actions';

// Knobs
const timeout = () =>
  number('timeout', 10, {
    range: true,
    min: 10,
    max: 100,
    step: 1,
  });
const alert0 = () =>
  object('alerts[0]', {
    id: 1,
    header: 'Header1',
    message: 'Message1',
  });
const alert1 = () =>
  object('alerts[1]', {
    id: 2,
    header: 'Header2',
    message: 'Message2',
    bsStyle: 'warning',
  });
const alert2 = () =>
  object('alerts[2]', {
    id: 3,
    header: 'Header3',
    message: 'Message3',
    bsStyle: 'danger',
    errors: ['Suberror 1', 'Suberror 2'],
  });

// Actions
const clearAlert = () => action('clearAlert');

// Component
const withComponent = propsFn => (
  <NotificationList {...propsFn()} clearAlert={clearAlert()}/>
);

storiesOf('UI|NotificationList', module)
  .addDecorator(withComponent)
  .add('with only message', () => ({
    alerts: [
      {
        id: 1,
        message: 'Message',
      },
    ],
  }))
  .add('with only header', () => ({
    alerts: [
      {
        id: 1,
        message: 'Header',
      },
    ],
  }))
  .add('with header and message', () => ({
    alerts: [
      {
        id: 1,
        header: 'Header',
        message: 'Message',
      },
    ],
  }))
  .add('with alert and timeout', () => ({
    timeout: 5,
    alerts: [
      {
        id: 1,
        header: 'Header',
        message: 'Message',
      },
    ],
  }))
  .add('with error alert', () => ({
    alerts: [
      {
        id: 1,
        header: 'Header',
        message: 'Message',
        errors: ['error 1', 'error 2'],
        bsStyle: 'danger',
      },
    ],
  }))
  .add('with error and sub-errors alert', () => ({
    alerts: [
      {
        id: 1,
        header: 'Header',
        message: 'Message',
        errors: ['Suberror 1', 'Suberror 2'],
        bsStyle: 'danger',
      },
    ],
  }))
  .add('with info alert', () => ({
    alerts: [
      {
        id: 1,
        header: 'Header',
        message: 'Message',
        bsStyle: 'info',
      },
    ],
  }))
  .add('with warning alert', () => ({
    alerts: [
      {
        id: 1,
        header: 'Header',
        message: 'Message',
        bsStyle: 'warning',
      },
    ],
  }))
  .add('with success alert', () => ({
    alerts: [
      {
        id: 1,
        header: 'Header',
        message: 'Message',
        bsStyle: 'success',
      },
    ],
  }))
  .add('Interactive Mode', () => ({
    timeout: timeout(),
    alerts: [alert0(), alert1(), alert2()],
  }));
