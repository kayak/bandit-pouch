import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import {
  assert,
  popover,
  tooltip,
  deprecate,
} from '../src/utils';

describe('utils', () => {
  describe('assert', () => {
    it('should not throw error', () => {
      expect(() => {
        assert(typeof 'foo' === 'string', 'It is all good');
      }).to.not.throw();
    });

    it('should throw error', () => {
      expect(() => {
        assert(typeof 'foo' === 'number', 'It is all bad');
      }).to.throw('Assertion Failed: It is all bad');
    });
  });

  describe('deprecate', () => {
    const deprecated = deprecate('Do not use this function', i => 5 + i);

    it('should return function', () => expect(deprecated).to.be.a('function'));
    it('should print message and return result', () => {
      const warn = sinon.stub(console, 'warn');
      expect(deprecated(1)).to.equal(6);
      expect(warn.calledOnce).to.equal(true);
      expect(warn.calledWithMatch('DEPRECATION: Do not use this function')).to.equal(true);
    });
  });

  describe('popover', () => {
    const wrapper = shallow(popover('Title', 'Contents'));
    it('should contain title', () => expect(wrapper.find('.popover-title').text()).to.equal('Title'));
    it('should contain text', () => expect(wrapper.find('.popover-content').text()).to.equal('Contents'));
  });

  describe('tooltip', () => {
    const wrapper = shallow(tooltip('Tooltip'));
    it('should contain text', () => expect(wrapper.find('.tooltip-inner').text()).to.equal('Tooltip'));
    it('should accept a react element', () => {
      expect(shallow(tooltip(tooltip('Tooltip'))).find('.tooltip-inner').text()).to.equal('Tooltip');
    });
  });
});
