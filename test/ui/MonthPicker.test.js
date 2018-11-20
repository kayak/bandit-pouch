import React from 'react';
import moment from 'moment';
import { spy } from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import MonthPicker, { formatDisplay, formatValue, toState } from '../../src/ui/MonthPicker';

describe('MonthPicker', () => {
  let wrapper;
  let onChange;

  context('methods', () => {
    describe('#formatDisplay', () => {
      it('should format month-year display value', () => expect(formatDisplay(2019, 6)).to.be.equal('July, 2019'));
    });
    describe('#formatValue', () => {
      it('it should format month-year value', () => expect(formatValue(2019, 6)).to.be.equal('2019-07'));
    });
    describe('#toState', () => {
      const now = moment();
      it('with today\'s date', () => expect(toState()).to.be.deep.equal({
        year: now.year(),
        month: now.month(),
        display: now.format('MMMM, YYYY'),
      }));
      it('with invalid date', () => expect(toState('invalid string')).to.be.deep.equal({
        year: now.year(),
        month: now.month(),
        display: now.format('MMMM, YYYY'),
      }));
      it('with specified date', () => expect(toState('2018-08')).to.be.deep.equal({
        year: 2018,
        month: 7,
        display: 'August, 2018',
      }));
    });
  });

  context('with default date', () => {
    beforeEach(() => {
      onChange = spy();
      wrapper = mount(<MonthPicker value="2018-12" onChange={onChange} />);
    });

    it('should render formatted value', () => expect(
      wrapper.find('input').props().value,
    ).to.equal('December, 2018'));

    it('should render months', () => {
      expect(wrapper.find('a.month-picker-month').length).to.equal(12);
      expect(wrapper.find('a.month-picker-month.active').text()).to.equal('Dec');
    });

    it('should render year', () => expect(
      wrapper.find('.month-picker-year').text(),
    ).to.equal('2018'));

    it('should open and close dropdown', () => {
      wrapper.find('a.dropdown-toggle').simulate('click');
      expect(wrapper.state('opened')).to.equal(true);
      wrapper.find('a.dropdown-toggle').simulate('click');
      expect(wrapper.state('opened')).to.equal(false);
    });

    it('should select month', () => {
      wrapper.find('.month-picker-months li').at(5).find('a').simulate('click');
      expect(wrapper.state('year')).to.equal(2018);
      expect(wrapper.state('month')).to.equal(5);
      expect(wrapper.state('display')).to.equal('June, 2018');
      expect(onChange.calledOnce).to.equal(true);
      expect(onChange.calledWith('2018-06', 2018, 5)).to.equal(true);
    });

    it('should select year', () => {
      wrapper.find('.month-picker-header a').at(0).simulate('click');
      expect(wrapper.state('year')).to.equal(2017);
      expect(wrapper.state('month')).to.equal(11);
      expect(wrapper.state('display')).to.equal('December, 2017');
      expect(onChange.notCalled).to.equal(true);
    });

    it('should select year and month', () => {
      wrapper.find('.month-picker-header a').at(1).simulate('click');
      wrapper.find('.month-picker-months li').at(7).find('a').simulate('click');
      expect(wrapper.state('year')).to.equal(2019);
      expect(wrapper.state('month')).to.equal(7);
      expect(wrapper.state('display')).to.equal('August, 2019');
      expect(onChange.calledOnce).to.equal(true);
      expect(onChange.calledWith('2019-08', 2019, 7)).to.equal(true);
    });
  });
});