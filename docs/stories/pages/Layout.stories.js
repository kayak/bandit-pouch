import React from 'react';

import { storiesOf } from '@storybook/react';
import { object, text } from '@storybook/addon-knobs';
import { Content, HorizontalSplit, Left, Page, Right, TopPanel, } from 'bandit-pouch';

// Knobs
const title = () => text('title', 'Page X');
const pageLayoutTopPanelStyle = () =>
  object('pageLayoutTopPanelStyle', {
    padding: '28px 50px',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #c4c4c4',
  });
const pageLayoutContentStyle = () =>
  object('pageLayoutContentStyle', {
    backgroundColor: '#fcfcfc',
    paddingTop: '20px',
    paddingBottom: '60px',
  });
const pageLayoutLeftStyle = () =>
  object('pageLayoutLeftStyle', {
    borderRight: '1px solid #c4c4c4',
    backgroundColor: '#fcfcfc',
    paddingTop: '20px',
    paddingBottom: '60px',
  });
const pageLayoutRightStyle = () =>
  object('pageLayoutRightStyle', {
    backgroundColor: '#ffffff',
    minHeight: '500px',
    paddingTop: '20px',
    paddingBottom: '60px',
  });
const pageLayoutHorizontalSplitStyle = () =>
  object('pageLayoutHorizontalSplitStyle', {
    backgroundColor: '#fcfcfc',
  });

// Actions

// Component
const withPage = propsFn => <Page {...propsFn()}>This is Page</Page>;
const withPageHorizontalSplit = propsFn => (
  <Page {...propsFn()}>
    <Content style={pageLayoutContentStyle()}>
      <HorizontalSplit style={pageLayoutHorizontalSplitStyle()}>
        <Left style={pageLayoutLeftStyle()}>This is Left</Left>
        <Right style={pageLayoutRightStyle()}>This is right</Right>
      </HorizontalSplit>
    </Content>
  </Page>
);
const withTopPanelContent = propsFn => (
  <Page {...propsFn()}>
    <TopPanel style={pageLayoutTopPanelStyle()}>This is TopPanel</TopPanel>
    <Content style={pageLayoutContentStyle()}>This is Content</Content>
  </Page>
);

storiesOf('Layout|Page', module)
  .addDecorator(withPage)
  .add('default', () => ({}))
  .add('with title', () => ({ title: 'Page 1' }))
  .add('Interactive Mode', () => ({ title: title() }));

storiesOf('Layout|Page with HorizontalSplit', module)
  .addDecorator(withPageHorizontalSplit)
  .add('default', () => ({}));

storiesOf('Layout|Page with TopPanel and Content', module)
  .addDecorator(withTopPanelContent)
  .add('default', () => ({}));
