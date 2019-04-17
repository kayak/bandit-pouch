import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { ValueLabel } from 'bandit-pouch';

// Knobs
const label = () => text('label', 'Label');
const value = () => text('value', 'Value');

// Actions

// Component
const withComponent = propsFn => <ValueLabel {...propsFn()} />;

storiesOf('UI|ValueLabel', module)
  .addDecorator(withComponent)
  .add('with a label and value', () => ({
    label: 'edit',
    value: 'Edit me'
  }))
  .add('Interactive Mode', () => ({
    label: label(),
    value: value()
  }));
