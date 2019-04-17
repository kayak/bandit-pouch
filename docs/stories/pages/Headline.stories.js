import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Headline, SectionHeadline } from 'bandit-pouch';

// Knobs
const title = () => text('title', 'Title');
const subtitle = () => text('subtitle', 'Subtitle');

// Actions

// Component
const withHeadline = propsFn => <Headline {...propsFn()} />;
const withSectionHeadline = propsFn => <SectionHeadline {...propsFn()} />;

storiesOf('Layout|Headline', module)
  .addDecorator(withHeadline)
  .add('Interactive Mode', () => ({
    title: title(),
    subtitle: subtitle()
  }));

storiesOf('Layout|SectionHeadline', module)
  .addDecorator(withSectionHeadline)
  .add('Interactive Mode', () => ({
    title: title(),
    subtitle: subtitle()
  }));
