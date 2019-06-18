import React from 'react';
import requireContext from 'require-context.macro';
import {addDecorator, addParameters, configure} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';

addParameters({
  options: {
    name: 'Bandit Pouch',
    panelPosition: 'right',
    url: 'https://github.com/kayak/bandit-pouch',
  },
});

// Global decorators
addDecorator(withKnobs);
addDecorator(withInfo({
  // Disabling propTables for now (https://github.com/storybooks/storybook/issues/3389),
  // since it make snapshot tests fail in Travis. We should revisit this once we update
  // react-boostrap again, given it's going to use hooks for versions after 1.0.0-beta.5.
  propTables: false,
}));

const Wrapper = props => (
  <div style={{margin: '20px 50px'}}>
    {props.children}
  </div>
);

addDecorator(storyFn => (
  <Wrapper>
    {storyFn()}
  </Wrapper>
));

// Automatically import all files ending in *.stories.js
const req = requireContext('../stories', true, /.stories.js$/);

function loadStories() {
  req.keys()
    .forEach(filename => req(filename));
}

configure(loadStories, module);
