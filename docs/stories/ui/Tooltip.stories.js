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

// JSDom can't be used to test this, as it rely on refs. Try again once we update react-bootstrap
// (currently on 1.0.0-beta.5).
storiesOf('UI|Tooltip.DontTest', module)
  .addDecorator(withComponent)
  .add('default', () => ({}));
