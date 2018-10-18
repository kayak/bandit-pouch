---
id: 'ui-notifications'
title: 'Notifications list'
---

```javascript
import { NotificationList } from 'bandit-pouch';


class NotificationsExample extends Component {
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
          timeout={4} // timeout is in seconds
          alerts={alerts} // list of alerts to display
          clearAlert={id => this.onClearAlert(id)} // callback when an alert should be cleared
        />
      </div>
    );
  }
}

```
