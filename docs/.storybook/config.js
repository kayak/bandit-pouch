import React from 'react';
import requireContext from 'require-context.macro';

import { addDecorator, addParameters, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

addParameters({
  options: {
    name: 'Bandit Pouch',
    panelPosition: 'right',
    url: 'https://github.com/kayak/bandit-pouch',
  },
});

// Global decorators
addDecorator(withKnobs);
addDecorator(withInfo);
addDecorator(storyFn => (
  <div style={{ margin: '20px 50px' }} children={storyFn()}/>
));

// Automatically import all files ending in *.stories.js
const req = requireContext('../stories', true, /.stories.js$/);

function loadStories() {
  req.keys()
    .forEach(filename => req(filename));
}

configure(loadStories, module);
