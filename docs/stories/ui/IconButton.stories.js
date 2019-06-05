import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { IconButton } from 'bandit-pouch';

// Knobs
const icon = () => text('icon', 'times');
const label = () => text('label', 'Edit me');

// Actions

// Component
const withComponent = propsFn => <IconButton icon={icon()} {...propsFn()} />;

storiesOf('UI|IconButton', module)
  .addDecorator(withComponent)
  .add('default', () => ({}))
  .add('with an icon and label', () => ({
    icon: 'plus',
    label: 'Edit me',
  }))
  .add('Interactive Mode', () => ({
    label: label(),
  }));
