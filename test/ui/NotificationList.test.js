import React from 'react';
import { mount, shallow } from 'enzyme';
import { Alert } from 'react-bootstrap';
import { NotificationItem, NotificationList } from '../../src/ui/NotificationList';

const alerts = [{
  id: 'first',
  message: 'first test message',
}, {
  id: 'second',
  bsStyle: 'success',
  header: 'second test header',
  message: 'second test message',
  errors: ['first error', 'second error'],
  timeout: 666,
}];

describe('NotificationItem', () => {
  let wrapper;
  let onClose;

  beforeAll(() => {
    onClose = jest.fn();
    wrapper = shallow(<NotificationItem
      id="test id"
      header="test header"
      message="test message"
      errors={['first error', 'second error']}
      bsStyle="danger"
      onClose={onClose}
    />);
  });

  it('renders the header correctly', () => {
    expect(wrapper.find(Alert).find('h4').text()).toEqual('test header');
  });

  it('renders the message correctly', () => {
    expect(wrapper.find(Alert).find('p').text()).toEqual('test message');
  });

  it('renders the errors correctly', () => {
    expect(wrapper.find(Alert).find('ul').childAt(0).text()).toEqual('first error');
    expect(wrapper.find(Alert).find('ul').childAt(1).text()).toEqual('second error');
  });

  it('renders an alert box with the bootstrap style \'danger\'', () => {
    expect(wrapper.find(Alert).prop('bsStyle')).toEqual('danger');
  });

  it('renders an alert box with the bootstrap style \'info\' if no bsStyle prop is passed', () => {
    wrapper = shallow(<NotificationItem
      id="test id"
      header="test header"
      message="test message"
      onClose={f => f}
    />);
    return expect(wrapper.find(Alert).prop('bsStyle')).toEqual('info');
  });

  it('assert onClose is called on timeout', (done) => {
    wrapper = shallow(<NotificationItem
      id="test id"
      header="test header"
      message="test message"
      timeout={0.001}
      onClose={onClose}
    />);

    setTimeout(() => {
      expect(onClose).toHaveBeenCalledWith("test id");
      done();
    }, 0.1);
  });

  it('assert onClose is called when close button is clicked', () => {
    wrapper = mount(<NotificationItem
      id="test id"
      header="test header"
      message="test message"
      timeout={0.001}
      onClose={onClose}
    />);

    expect(onClose).not.toHaveBeenCalledWith("test id");
    wrapper.find(Alert).at(0).find('.close').simulate('click');
    expect(onClose).toHaveBeenCalledWith("test id");
  });
});

describe('NotificationList', () => {
  let wrapper;
  let clearAlert;

  beforeAll(() => {
    clearAlert = jest.fn();
    wrapper = shallow(<NotificationList
      alerts={alerts}
      clearAlert={clearAlert}
    />);
  });

  it('renders as much NotificationItem elements as alerts', () => {
    expect(wrapper.find(NotificationItem)).toHaveLength(alerts.length);
  });

  it('to pass expected props to the firts NotificationItem element', () => {
    expect(wrapper.find(NotificationItem)
      .at(0)
      .props())
      .toStrictEqual({
        id: alerts[0].id,
        bsStyle: "info",
        errors: [],
        header: null,
        message: alerts[0].message,
        onClose: clearAlert,
        timeout: 30,
      });
  });

  it('to pass expected props to the second NotificationItem element', () => {
    expect(wrapper.find(NotificationItem).at(1).props()).toStrictEqual({
       id: alerts[1].id,
       bsStyle: alerts[1].bsStyle,
       errors: alerts[1].errors,
       header: alerts[1].header,
       message: alerts[1].message,
       onClose: clearAlert,
       timeout: 30,
    });
  });

  it('to pass timeout props to all NotificationItem elements', () => {
    wrapper = shallow(<NotificationList
      alerts={alerts}
      timeout={666}
      clearAlert={clearAlert}
    />);
    expect(wrapper.find(NotificationItem).at(0).props()).toHaveProperty('timeout', 666);
  });
});
