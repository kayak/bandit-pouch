import React from 'react';
import moment from 'moment';
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
  tooltip,
  Content,
  TopPanel,
  ErrorPage,
  PageNotFound,
  Abbreviation,
  HorizontalSplit,
  NotificationList,
} from 'bandit-pouch';

import Layout from '../components/layout';
import { Tabs } from '../components/markdown';

const AbbreviationExample = () => {
  const date = moment().subtract(3, 'm');

  return (
    <div>
      <p>
        This example was shown
        &nbsp;
        <Abbreviation
          label={date.fromNow()}
          tooltip={date.format('YYYY-MM-DD H:mm:ss')}
        />
      </p>
    </div>
  );
};

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
        </Content>
      </Right>
    </HorizontalSplit>
  </Page>
);

const PagesExample = () => (
  <Row>
    <Col xs={12}>
      <ErrorPage icon="exclamation" className="text-danger">
        <p>An error message</p>
      </ErrorPage>
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

const LayoutPage = ({ data }) => (
  <Layout>
    <Tabs
      id="ui-tabs"
      data={data}
      examples={{
        'ui-pages': [<PagesExample />],
        'ui-layout': [<LayoutExample />],
        'ui-abbreviation': [<AbbreviationExample />],
        'ui-notifications': [<NotificationsExample />],
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
