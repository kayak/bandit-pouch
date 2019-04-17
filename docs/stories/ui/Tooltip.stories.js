import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Tooltip } from 'bandit-pouch';
import { Button } from 'react-bootstrap';

// Knobs
const tooltipText = () => text('text', 'You are hovering me!');

// Actions

// Component
const withComponent = propsFn => (
  <Tooltip {...propsFn()} text={tooltipText()}>
    <Button>Hover me!</Button>
  </Tooltip>
);

storiesOf('UI|Tooltip', module)
  .addDecorator(withComponent)
  .add('default', () => ({}));
