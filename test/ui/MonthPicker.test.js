import React from 'react';
import moment from 'moment';
import { mount } from 'enzyme';
import { Dropdown } from 'react-bootstrap';
import MonthPicker, { formatDisplay, formatValue, toState } from '../../src/ui/MonthPicker';

describe('MonthPicker', () => {
  let wrapper;
  let onClose;
  let onChange;

  describe('methods', () => {
    describe('#formatDisplay', () => {
      it('should format month-year display value', () => expect(formatDisplay(2019, 6)).toEqual('July, 2019'));
    });
    describe('#formatValue', () => {
      it('it should format month-year value', () => expect(formatValue(2019, 6)).toEqual('2019-07'));
    });
    describe('#toState', () => {
      const now = moment();
      it('with today\'s date', () => expect(toState()).toEqual({
        year: now.year(),
        month: now.month(),
        display: now.format('MMMM, YYYY'),
      }));
      it('with invalid date', () => expect(toState('invalid string')).toEqual({
        year: now.year(),
        month: now.month(),
        display: now.format('MMMM, YYYY'),
      }));
      it('with specified date', () => expect(toState('2018-08')).toEqual({
        year: 2018,
        month: 7,
        display: 'August, 2018',
      }));
    });
  });

  describe('with default date', () => {
    beforeEach(() => {
      onChange = jest.fn();
      onClose = jest.fn();
      wrapper = mount(<MonthPicker value="2018-12" onChange={onChange} onClose={onClose} />);
    });

    it('should render formatted value', () => expect(
      wrapper.find('input').props().value,
    ).toEqual('December, 2018'));

    it('should render months', () => {
      expect(wrapper.find('a.month-picker-month').length).toEqual(12);
      expect(wrapper.find('a.month-picker-month.active').text()).toEqual('Dec');
    });

    it('should render year', () => expect(
      wrapper.find('.month-picker-year').text(),
    ).toEqual('2018'));

    it('should update view when value changes', () => {
      wrapper.setProps({ value: '2019-03' });
      expect(wrapper.find('input').props().value).toEqual('March, 2019');
      expect(wrapper.find('.month-picker-year').text()).toEqual('2019');
      expect(wrapper.find('a.month-picker-month.active').text()).toEqual('Mar');
    });

    it('should open and close dropdown', () => {
      wrapper.find('a.dropdown-toggle').simulate('click');
      expect(wrapper.state('opened')).toEqual(true);
      wrapper.find('a.dropdown-toggle').simulate('click');
      expect(wrapper.state('opened')).toEqual(false);
    });

    it('should trigger onClose', () => {
      wrapper.find('a.dropdown-toggle').simulate('click');
      expect(wrapper.state('opened')).toEqual(true);
      const toggle = wrapper.find(Dropdown).prop('onToggle');
      expect(typeof toggle).toEqual('function');
      toggle(false, null, { source: 'rootClose' });
      expect(onClose).toBeCalled();
      expect(onClose).toBeCalledWith('2018-12', 2018, 11);
    });

    it('should select month', () => {
      wrapper.find('.month-picker-months li').at(5).find('a').simulate('click');
      expect(wrapper.state('year')).toEqual(2018);
      expect(wrapper.state('month')).toEqual(5);
      expect(wrapper.state('display')).toEqual('June, 2018');
      expect(onChange).toBeCalled();
      expect(onChange).toBeCalledWith('2018-06', 2018, 5);
    });

    it('should select year', () => {
      wrapper.find('.month-picker-header a').at(0).simulate('click');
      expect(wrapper.state('year')).toEqual(2017);
      expect(wrapper.state('month')).toEqual(11);
      expect(wrapper.state('display')).toEqual('December, 2017');
      expect(onChange).not.toBeCalled();
    });

    it('should select year and month', () => {
      wrapper.find('.month-picker-header a').at(1).simulate('click');
      wrapper.find('.month-picker-months li').at(7).find('a').simulate('click');
      expect(wrapper.state('year')).toEqual(2019);
      expect(wrapper.state('month')).toEqual(7);
      expect(wrapper.state('display')).toEqual('August, 2019');
      expect(onChange).toBeCalled();
      expect(onChange).toBeCalledWith('2019-08', 2019, 7);
    });
  });
});
