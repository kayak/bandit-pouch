import { shallow, mount } from 'enzyme';

import {
  debug,
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
      }).not.toThrowError();
    });

    it('should throw error', () => {
      expect(() => {
        assert(typeof 'foo' === 'number', 'It is all bad');
      }).toThrowError('Assertion Failed: It is all bad');
    });
  });

  describe('debug', () => {
    it('should wrap function', () => {
      assert(debug(value => value)(1) === 1);
    });
  });

  describe('deprecate', () => {
    const warn = jest.spyOn(global.console, 'warn');
    const deprecated = deprecate('Do not use this function', i => 5 + i);

    afterEach(() => jest.resetAllMocks());

    it('should return function', () => expect(typeof deprecated).toEqual('function'));
    it('should print message and return result', () => {
      expect(deprecated(1)).toEqual(6);
      expect(warn).toHaveBeenCalled();
      expect(warn.mock.calls[0][0]).toMatch(/DEPRECATION: Do not use this function/);
    });
  });

  describe('popover', () => {
    const wrapper = mount(popover('Title', 'Contents'));
    it('should contain title', () => expect(wrapper.find('.popover').first().instance().title).toEqual('Title'));
    it('should contain text', () => expect(wrapper.find('.popover').text()).toEqual('Contents'));
  });

  describe('tooltip', () => {
    const wrapper = mount(tooltip('Tooltip'));
    it('should contain text', () => expect(wrapper.find('.tooltip-inner').text()).toEqual('Tooltip'));
    it('should accept a react element', () => {
      expect(mount(tooltip(tooltip('Tooltip'))).find('.tooltip-inner').text()).toEqual('Tooltip');
    });
  });
});
