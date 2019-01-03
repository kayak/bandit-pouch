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

const DateLabel = ({ date }) => {
  const instance = moment(date);
  return (
    <Tooltip text={instance.format('dddd, MMMM Do YYYY, h:mm a')} placement="right">
      <time>{instance.fromNow()}</time>
    </Tooltip>
  );
};

const AppLayout = () => (
  <Page title="My awesome app">
    <TopPanel>
      <Headline title="My awesome app" />
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
    <Content>
      <CenteredRow>
        <h3 className="m-0">Centered title</h3>
      </CenteredRow>
      <article>
        <Headline title="Page headline" subtitle="Subtitle">
          <ButtonGroup>
            <Tooltip text="Copy text" placement="top">
              <IconButton icon="copy" bsSize="sm" />
            </Tooltip>
            <Tooltip text="Share" placement="top">
              <IconButton icon="share" bsSize="sm" />
            </Tooltip>
          </ButtonGroup>
        </Headline>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sed risus ultricies tristique nulla aliquet enim. Ante metus
          dictum at tempor commodo ullamcorper.
        </p>
        <SectionHeadline title="Section headline" subtitle="Subtitle" />
        <p>
          Faucibus nisl tincidunt eget nullam non nisi est sit amet.
          At augue eget arcu dictum varius duis. Cursus sit amet dictum
          sit amet justo donec enim. Vestibulum morbi blandit cursus
          risus at ultrices mi tempus. Curabitur gravida arcu ac 
          tortor dignissim. Eget nulla facilisi etiam dignissim diam quis enim.
        </p>
        <p>A arcu cursus vitae congue mauris rhoncus aenean.</p>

        <hr />

        <footer>
          <Row className="text-right">
            <Col xsOffset={8} xs={2}>
              <ValueLabel label="Author" value="John Doe" />
            </Col>
            <Col xs={2}>
              <ValueLabel label="Published" value={<DateLabel date={date} />} />
            </Col>
          </Row>
        </footer>
      </article>
    </Content>
  </Page>
)

```

You can see the example below how it looks in the page. 
