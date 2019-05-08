import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Popover } from 'bandit-pouch';
import { Button } from 'react-bootstrap';

// Knobs
const title = () => text('title', 'Title');
const tooltipText = () => text('text', 'You are hovering me!');

// Actions

// Component
const withComponent = propsFn => (
  <Popover {...propsFn()} title={title()} text={tooltipText()}>
    <Button>Hover me!</Button>
  </Popover>
);

storiesOf('UI|Popover.DontTest', module)
  .addDecorator(withComponent)
  .add('default', () => ({}));
