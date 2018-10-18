---
id: 'ui-layout'
title: 'Layout'
---
This module contains react components that can be used to define the page layout of you app.
Here is the list of available components and how they can be used:

```javascript
import {
  Page,
  Left,
  Right,
  Content,
  TopPanel,
  HorizontalSplit,
} from 'bandit-pouch';

const Sidebar = () => (
  // your sidebar component
);

const AppLayout = () => (
  <Page title="My awesome app">
    <TopPanel>
      <h1>My awesome app</h1> 
    </TopPanel>
    <HorizontalSplit>
      <Left>
        <Sidebar />
      </Left>
      <Right>
        <Content>
          {children}
        </Content>
      </Right>
    </HorizontalSplit>
  </Page>
)

```

You can see the example below how it looks in the page. 
