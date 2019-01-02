/* eslint-disable react/no-multi-comp */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import {
  Col,
  Nav,
  Row,
  Button,
  NavItem,
  Jumbotron,
  ButtonGroup,
} from 'react-bootstrap';
import {
  Page,
  Left,
  Right,
  Loader,
  Content,
  Tooltip,
  Popover,
  TopPanel,
  ErrorPage,
  IconButton,
  CenteredRow,
  PageNotFound,
  CenteredLoader,
  LoadingWrapper,
  HorizontalSplit,
  NotificationList,
} from 'bandit-pouch';

import Layout from '../components/layout';
import { Tabs } from '../components/markdown';

const LoadersExample = () => (
  <div>
    <p>Simple loader wrapper inside a `div` container</p>
    <div style={{ padding: '20px' }}>
      <Loader type="ball-spin-fade-loader" />
    </div>
    <br />
    <p>Vertically and Horizontally centered loader</p>
    <CenteredLoader type="line-scale-pulse-out" />
  </div>
);

const LayoutExample = () => (
  <Page title="My awesome app">
    <TopPanel>
      <h1>My awesome app</h1>
    </TopPanel>
    <HorizontalSplit>
      <Left>
        <Nav bsStyle="pills" stacked>
          <NavItem href="#">Home</NavItem>
          <NavItem href="#">Orders</NavItem>
        </Nav>
      </Left>
      <Right>
        <Content>
          <Jumbotron>
            <h3>Hello, contents!</h3>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button bsStyle="primary">Learn more</Button>
            </p>
          </Jumbotron>

          <CenteredRow>
            <h3 style={{ margin: '20px auto' }}>Centered title</h3>
          </CenteredRow>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Sed risus ultricies tristique nulla aliquet enim. Ante metus dictum at tempor commodo ullamcorper.
            </p>
            <p>
              Faucibus nisl tincidunt eget nullam non nisi est sit amet. At augue eget arcu dictum varius duis.
              Cursus sit amet dictum sit amet justo donec enim. Vestibulum morbi blandit cursus risus at ultrices mi tempus.
              Curabitur gravida arcu ac tortor dignissim. Eget nulla facilisi etiam dignissim diam quis enim.
            </p>
            <p>A arcu cursus vitae congue mauris rhoncus aenean.</p>
          </div>
        </Content>
      </Right>
    </HorizontalSplit>
  </Page>
);

const LoadedPage = ({ model }) => (
  <div>
    <h1>List page</h1>
    <ul>
      {model.map(({ id, title }) => (
        <li key={id}>
          <p>{title}</p>
        </li>
      ))}
    </ul>
  </div>
);

LoadedPage.propTypes = {
  model: PropTypes.array.isRequired,
};

LoadedPage.mocks = [{ id: 1, title: 'Foo' }, { id: 2, title: 'Bar' }, { id: 3, title: 'Baz' }];

class LoadingWrapperExample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      error: null,
      found: true,
      loading: false,
      model: [...LoadedPage.mocks],
    };
  }

  fetch(options = {}) {
    this.setState({
      error: null,
      found: true,
      loading: true,
      model: [],
    }, () => setTimeout(() => {
      this.setState(state => ({ ...state, ...options, loading: false }));
    }, 2000));
  }

  render() {
    const {
      loading, error, found, model,
    } = this.state;

    return (
      <div style={{ minHeight: '460px' }}>
        <ButtonGroup>
          <Button onClick={() => this.fetch({ model: [...LoadedPage.mocks] })}>
            Fetch data
          </Button>
          <Button
            onClick={() => this.fetch({ error: { message: 'Remote server error', status: 500, icon: 'warning' } })}
          >
            Fetch data with an error
          </Button>
          <Button onClick={() => this.fetch({ found: false })}>
            Fetch data with a not find status
          </Button>
        </ButtonGroup>

        <LoadingWrapper
          component={LoadedPage}
          loading={loading}
          found={found}
          error={error}
          model={model}
        />
      </div>
    );
  }
}

const PagesExample = () => (
  <Row>
    <Col xs={12}>
      <ErrorPage
        status="503"
        icon="exclamation-circle"
        className="text-danger"
        message="An error message"
      />
    </Col>
    <Col xs={12}>
      <PageNotFound />
    </Col>
  </Row>
);

class NotificationsExample extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { alerts: [] };
  }

  onAddAlert(type, message) {
    this.setState(state => ({
      alerts: [...state.alerts, {
        id: Date.now(),
        bsStyle: type,
        message,
      }],
    }));
  }

  onClearAlert(id) {
    this.setState(state => ({
      alerts: state.alerts.filter(alert => alert.id !== id),
    }));
  }

  render() {
    const { alerts = [] } = this.state;

    return (
      <div>
        <p>Click the buttons bellow to create alerts</p>
        <ButtonGroup>
          <Button bsStyle="info" onClick={() => this.onAddAlert('info', 'Info message')}>
            Show info alert
          </Button>
          <Button bsStyle="warning" onClick={() => this.onAddAlert('warning', 'Warning message')}>
            Show warning alert
          </Button>
          <Button bsStyle="danger" onClick={() => this.onAddAlert('danger', 'Danger message')}>
            Show danger alert
          </Button>
        </ButtonGroup>

        <NotificationList
          timeout={4}
          alerts={alerts}
          clearAlert={id => this.onClearAlert(id)}
        />
      </div>
    );
  }
}

const ButtonsExample = () => (
  <Row>
    <Col xs={12}>
      <p>Basic usage</p>
      <IconButton icon="play" bsStyle="primary" />
      &nbsp;
      <IconButton icon="stop" label="Stahp!" bsStyle="danger" />
      <hr />
    </Col>
    <Col xs={12}>
      <p>With a Popover overlay</p>
      <Popover title="Login" text="Enter your credentials">
        <IconButton icon="user" />
      </Popover>
      <hr />
    </Col>
    <Col xs={12}>
      <p>With a Tooltip</p>
      <Tooltip text="Pause the player">
        <IconButton icon="pause" />
      </Tooltip>
      <hr />
    </Col>
  </Row>
);

const LayoutPage = ({ data }) => (
  <Layout>
    <Tabs
      id="ui-tabs"
      data={data}
      examples={{
        'ui-pages': [<PagesExample />],
        'ui-layout': [<LayoutExample />],
        'ui-loaders': [<LoadersExample />],
        'ui-buttons': [<ButtonsExample />],
        'ui-notifications': [<NotificationsExample />],
        'ui-loading-wrapper': [<LoadingWrapperExample />],
      }}
      defaultActiveKey="ui-layout"
    />
  </Layout>
);

LayoutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`  
  query {
    allMarkdownRemark(filter: {
      frontmatter: {
        id: { glob: "ui-*" }
      }
    }){
      edges {
        node {
          html
          frontmatter {
            id
            title
          }
        }
      }
    }
  }
`;

export default LayoutPage;
