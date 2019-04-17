import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { PageNotFound } from 'bandit-pouch';

// Knobs
const message = () => text('message', 'This error occurred!');
const icon = () => text('icon', 'edit');

// Actions

// Component
const withComponent = propsFn => <PageNotFound {...propsFn()} />;

storiesOf('Pages|PageNotFound', module)
  .addDecorator(withComponent)
  .add('default', () => ({}))
  .add('with other icon', () => ({ icon: 'fedit' }))
  .add('Interactive Mode', () => ({
    icon: icon(),
    message: message()
  }));
