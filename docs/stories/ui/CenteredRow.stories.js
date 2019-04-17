import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from 'react-bootstrap';
import { CenteredRow } from 'bandit-pouch';

// Knobs

// Actions

// Component
const withComponent = propsFn => (
  <CenteredRow {...propsFn()}>
    <Button>This does not have to be a button!</Button>
  </CenteredRow>
);

storiesOf('UI|CenteredRow', module)
  .addDecorator(withComponent)
  .add('default', () => ({}));
