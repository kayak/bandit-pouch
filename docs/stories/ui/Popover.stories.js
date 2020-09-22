import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Popover } from 'bandit-pouch';
import { Button } from 'react-bootstrap';

// Knobs
const title = () => text('title', 'Title');
const popoverText = () => text('text', 'You are hovering me!');

// Actions

// Component
const withComponent = propsFn => (
  <Popover title='Popover Title' text='Popover Content' placement='right' {...propsFn()}>
    <Button>Hover me!</Button>
  </Popover>
);

storiesOf('UI|Popover', module)
  .addDecorator(withComponent)
  .add('default', () => ({}))
  .add('Interactive Mode', () => ({
    title: title(),
    text: popoverText(),
  }));;
