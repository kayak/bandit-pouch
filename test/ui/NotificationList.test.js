import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Alert } from 'react-bootstrap';
import { NotificationItem, NotificationList } from '../../src/ui/NotificationList';

const alerts = [{
  id: 'first',
  message: 'first test message',
}, {
  id: 'second',
  message: 'second test message',
}];

describe('NotificationItem', () => {
  let wrapper;

  before(() => {
    wrapper = mount(<NotificationItem
      header="test header"
      message="test message"
      errors={['first error', 'second error']}
      bsStyle="danger"
      onClose={f => f}
    />);
  });

  it('renders the header correctly', () => {
    expect(wrapper.find(Alert).find('h4').text()).to.equal('test header');
  });

  it('renders the message correctly', () => {
    expect(wrapper.find(Alert).find('p').text()).to.equal('test message');
  });

  it('renders the errors correctly', () => {
    expect(wrapper.find(Alert).find('ul').childAt(0).text()).to.equal('first error');
    expect(wrapper.find(Alert).find('ul').childAt(1).text()).to.equal('second error');
  });

  it('renders an alert box with the bootstrap style \'danger\'', () => {
    expect(wrapper.find(Alert).prop('bsStyle')).to.equal('danger');
  });

  it('renders an alert box with the bootstrap style \'info\' if no bsStyle prop is passed', () => {
    wrapper = mount(<NotificationItem
      header="test header"
      message="test message"
      onClose={f => f}
    />);
    return expect(wrapper.find(Alert).prop('bsStyle')).to.equal('info');
  });
});

describe('NotificationItem', () => {
  it('should dismiss the alert on close link clicked', () => {
    const wrapper = mount(<NotificationList
      alerts={alerts}
      clearAlert={(id) => {
        wrapper.setProps({ alerts: alerts.filter(alert => alert.id !== id) });
      }}
    />);

    expect(wrapper.find(Alert)).to.have.lengthOf(2);
    wrapper.find(Alert).at(0).find('.close').simulate('click');
    expect(wrapper.find(Alert)).to.have.lengthOf(1);
    expect(wrapper.find(Alert).find('p').text()).to.equal('second test message');
  });

  it('should dismiss all alerts on timeout', (done) => {
    const wrapper = mount(<NotificationList
      alerts={alerts}
      timeout={1}
      clearAlert={(id) => {
        wrapper.setProps({ alerts: wrapper.prop('alerts').filter(alert => alert.id !== id) });
      }}
    />);

    expect(wrapper.find(Alert)).to.have.lengthOf(2);

    setTimeout(() => {
      expect(wrapper.find(Alert)).to.have.lengthOf(0);
      done();
    }, 1200);
  });

  it('assert clearAlert only called once per notification dismissal', (done) => {
    let cleared = alerts.reduce((obj, alert) => ({ [alert.id]: 0, ...obj }), alert);
    const wrapper = mount(<NotificationList
      alerts={alerts}
      timeout={1}
      clearAlert={(id) => {
        cleared = { ...cleared, [id]: cleared[id] + 1 };
      }}
    />);

    wrapper.find(Alert).at(0).find('.close').simulate('click');
    wrapper.find(Alert).at(1).find('.close').simulate('click');

    setTimeout(() => {
      expect(cleared).to.be.deep.equal(alerts.reduce((obj, alert) => ({ [alert.id]: 1, ...obj }), alert));
      done();
    }, 1200);
  });

  it('assert clearAlert only called once per notification timeout', (done) => {
    let cleared = alerts.reduce((obj, alert) => ({ [alert.id]: 0, ...obj }), alert);

    mount(<NotificationList
      alerts={alerts}
      timeout={1}
      clearAlert={(id) => {
        cleared = { ...cleared, [id]: cleared[id] + 1 };
      }}
    />);

    setTimeout(() => {
      expect(cleared).to.be.deep.equal(alerts.reduce((obj, alert) => ({ [alert.id]: 1, ...obj }), alert));
      done();
    }, 1200);
  });
});
