import React from 'react';
import { mount } from 'enzyme';

import SubmitResetRow from '../../src/forms/SubmitResetRow';

describe('<SubmitResetRow />', () => {
  let reset;

  beforeEach(() => {
    reset = jest.fn();
  });

  it('Should render with default state', () => {
    const wrapper = mount(<SubmitResetRow reset={reset} />);
    expect(wrapper.find('button').at(0).prop('disabled')).toEqual(true);
    expect(wrapper.find('button').at(0).text()).toEqual('Reset');
    expect(wrapper.find('button').at(1).prop('disabled')).toEqual(false);
    expect(wrapper.find('button').at(1).text()).toEqual('Submit');
    expect(wrapper.contains('.validation-error')).toEqual(false);

    wrapper.find('button').at(0).simulate('click');
    expect(reset).not.toHaveBeenCalled();

    wrapper.setProps({ enabled: false });
    expect(wrapper.find('button').at(1).prop('disabled')).toEqual(true);
  });

  it('Should disable buttons when submitting', () => {
    const wrapper = mount(<SubmitResetRow submitting reset={reset} />);
    expect(wrapper.find('button').at(0).prop('disabled')).toEqual(true);
    expect(wrapper.find('button').at(1).prop('disabled')).toEqual(true);
    expect(wrapper.contains('.validation-error')).toEqual(false);

    wrapper.find('button').at(0).simulate('click');
    expect(reset).not.toHaveBeenCalled();
  });

  it('Should be able to invoke reset', () => {
    const wrapper = mount(<SubmitResetRow pristine={false} reset={reset} />);
    expect(wrapper.find('button').at(0).prop('disabled')).toEqual(false);
    expect(wrapper.find('button').at(1).prop('disabled')).toEqual(false);
    expect(wrapper.contains('.validation-error')).toEqual(false);

    wrapper.find('button').at(0).simulate('click');
    expect(reset).toHaveBeenCalled();
  });

  it('Should show errors', () => {
    const wrapper = mount(<SubmitResetRow error="Validation failed" reset={reset} />);
    expect(wrapper.find('button').at(0).prop('disabled')).toEqual(true);
    expect(wrapper.find('button').at(1).prop('disabled')).toEqual(false);
    expect(wrapper.find('.validation-error').text()).toEqual('Validation failed');

    wrapper.setProps({ error: null, valid: false });
    expect(wrapper.contains('.validation-error')).toEqual(false);

    wrapper.setProps({ submitFailed: true });
    expect(wrapper.find('.validation-error').text()).toEqual('The form is invalid. Please fix any errors.');
  });
});
