import React from 'react';
import { spy } from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';

import SubmitResetRow from '../../src/forms/SubmitResetRow';

describe('<SubmitResetRow />', () => {
  let reset;

  beforeEach(() => {
    reset = spy();
  });

  it('Should render with default state', () => {
    const wrapper = mount(<SubmitResetRow reset={reset} />);
    expect(wrapper.find('button').at(0).prop('disabled')).to.equal(true);
    expect(wrapper.find('button').at(0).text()).to.equal('Reset');
    expect(wrapper.find('button').at(1).prop('disabled')).to.equal(false);
    expect(wrapper.find('button').at(1).text()).to.equal('Submit');
    expect(wrapper.contains('.validation-error')).to.equal(false);

    wrapper.find('button').at(0).simulate('click');
    expect(reset.notCalled).to.equal(true);

    wrapper.setProps({ enabled: false });
    expect(wrapper.find('button').at(1).prop('disabled')).to.equal(true);
  });

  it('Should disable buttons when submitting', () => {
    const wrapper = mount(<SubmitResetRow submitting reset={reset} />);
    expect(wrapper.find('button').at(0).prop('disabled')).to.equal(true);
    expect(wrapper.find('button').at(1).prop('disabled')).to.equal(true);
    expect(wrapper.contains('.validation-error')).to.equal(false);

    wrapper.find('button').at(0).simulate('click');
    expect(reset.notCalled).to.equal(true);
  });

  it('Should be able to invoke reset', () => {
    const wrapper = mount(<SubmitResetRow pristine={false} reset={reset} />);
    expect(wrapper.find('button').at(0).prop('disabled')).to.equal(false);
    expect(wrapper.find('button').at(1).prop('disabled')).to.equal(false);
    expect(wrapper.contains('.validation-error')).to.equal(false);

    wrapper.find('button').at(0).simulate('click');
    expect(reset.calledOnce).to.equal(true);
  });

  it('Should show errors', () => {
    const wrapper = mount(<SubmitResetRow error="Validation failed" reset={reset} />);
    expect(wrapper.find('button').at(0).prop('disabled')).to.equal(true);
    expect(wrapper.find('button').at(1).prop('disabled')).to.equal(false);
    expect(wrapper.find('.validation-error').text()).to.equal('Validation failed');

    wrapper.setProps({ error: null, valid: false });
    expect(wrapper.contains('.validation-error')).to.equal(false);

    wrapper.setProps({ submitFailed: true });
    expect(wrapper.find('.validation-error').text()).to.equal('The form is invalid. Please fix any errors.');
  });
});
