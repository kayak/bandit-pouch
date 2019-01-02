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
        <CenteredRow>
            <h3>Centered title</h3>
          </CenteredRow>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sed risus ultricies tristique nulla aliquet enim. Ante metus
              dictum at tempor commodo ullamcorper.
            </p>
            <p>
              Faucibus nisl tincidunt eget nullam non nisi est sit amet.
              At augue eget arcu dictum varius duis. Cursus sit amet dictum
              sit amet justo donec enim. Vestibulum morbi blandit cursus
              risus at ultrices mi tempus. Curabitur gravida arcu ac 
              tortor dignissim. Eget nulla facilisi etiam dignissim diam quis enim.
            </p>
            <p>A arcu cursus vitae congue mauris rhoncus aenean.</p>
          </div>
      </Right>
    </HorizontalSplit>
  </Page>
)

```

You can see the example below how it looks in the page. 
