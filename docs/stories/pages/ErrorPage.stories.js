import React from 'react';

import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';
import { ErrorPage } from 'bandit-pouch';

// Knobs
const message = () => text('message', 'This error occurred!');
const icon = () => text('icon', 'edit');
const status = () => number('status', 400);

// Actions

// Component
const withComponent = propsFn => (
  <ErrorPage message="This error occurred!" {...propsFn()} />
);

storiesOf('Pages|ErrorPage', module)
  .addDecorator(withComponent)
  .add('default', () => ({}))
  .add('with other icon', () => ({ icon: 'edit' }))
  .add('with status', () => ({ status: 400 }))
  .add('Interactive Mode', () => ({
    icon: icon(),
    status: status(),
    message: message(),
  }));
