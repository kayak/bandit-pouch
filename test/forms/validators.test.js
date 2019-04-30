import _ from 'lodash';

import * as validators from '../../src/forms/validators';

describe('validators', () => {
  describe('#required', () => {
    const validator = validators.required('Required');
    it('undefined should be required', () => expect(validator()).toEqual('Required'));
    it('null should be required', () => expect(validator(null)).toEqual('Required'));
    it('empty string should be required', () => expect(validator('')).toEqual('Required'));
    it('blank string should be required', () => expect(validator('  ')).toEqual('Required'));
    it('empty array should be required', () => expect(validator([])).toEqual('Required'));
    it('empty object should be required', () => expect(validator({})).toEqual('Required'));
    it('false should not be required', () => expect(validator(false)).toBeUndefined());
    it('true should not be required', () => expect(validator(true)).toBeUndefined());
    it('foobar should not be required', () => expect(validator('foobar')).toBeUndefined());
    it('number 0 should not be required', () => expect(validator(0)).toBeUndefined());
    it('number should not be required', () => expect(validator(1)).toBeUndefined());
    it('array should not be required', () => expect(validator([1])).toBeUndefined());
    it('object should not be required', () => expect(validator({ foo: 'bar' })).toBeUndefined());
  });

  describe('#regex', () => {
    const validator = validators.regex(/^foobar$/i, 'Invalid');
    it('undefined should be valid', () => expect(validator()).toBeUndefined());
    it('null should be valid', () => expect(validator(null)).toBeUndefined());
    it('empty string should be invalid', () => expect(validator('')).toEqual('Invalid'));
    it('blank string should be invalid', () => expect(validator('  ')).toEqual('Invalid'));
    it('empty array should be invalid', () => expect(validator([])).toEqual('Invalid'));
    it('empty object should be invalid', () => expect(validator({})).toEqual('Invalid'));
    it('false should be invalid', () => expect(validator(false)).toEqual('Invalid'));
    it('true should be invalid', () => expect(validator(true)).toEqual('Invalid'));
    it('FooBar-Baz should be invalid', () => expect(validator('FooBar-Baz')).toEqual('Invalid'));
    it('foo bar should be invalid', () => expect(validator('foo bar')).toEqual('Invalid'));
    it('foobar-baz should be invalid', () => expect(validator('foobar-baz')).toEqual('Invalid'));
    it('foobar should be valid', () => expect(validator('foobar')).toBeUndefined());

    it('throws error for invalid pattern', () => {
      expect(() => validators.regex()).toThrowError();
      expect(() => validators.regex(false, 'Invalid')).toThrowError();
      expect(() => validators.regex('invalid pattern', 'Invalid')).toThrowError();
    });
  });

  describe('#url', () => {
    const validator = validators.url('Invalid');
    it('undefined should be valid', () => expect(validator()).toBeUndefined());
    it('null should be valid', () => expect(validator(null)).toBeUndefined());
    it('empty string should be invalid', () => expect(validator('')).toEqual('Invalid'));
    it('blank string should be invalid', () => expect(validator('  ')).toEqual('Invalid'));
    it('empty array should be invalid', () => expect(validator([])).toEqual('Invalid'));
    it('empty object should be invalid', () => expect(validator({})).toEqual('Invalid'));
    it('false should be invalid', () => expect(validator(false)).toEqual('Invalid'));
    it('true should be invalid', () => expect(validator(true)).toEqual('Invalid'));

    it('doesn\'t allow "invalid" urls', () => {
      expect(validator(' ', {})).toEqual('Invalid');
      expect(validator('http://', {})).toEqual('Invalid');
      expect(validator('http://.', {})).toEqual('Invalid');
      expect(validator('http://..', {})).toEqual('Invalid');
      expect(validator('http://../', {})).toEqual('Invalid');
      expect(validator('http://?', {})).toEqual('Invalid');
      expect(validator('http://??', {})).toEqual('Invalid');
      expect(validator('http://??/', {})).toEqual('Invalid');
      expect(validator('http://#', {})).toEqual('Invalid');
      expect(validator('http://##', {})).toEqual('Invalid');
      expect(validator('http://##/', {})).toEqual('Invalid');
      expect(validator('http://foo.bar?q=Spaces should be encoded', {})).toEqual('Invalid');
      expect(validator('//', {})).toEqual('Invalid');
      expect(validator('//a', {})).toEqual('Invalid');
      expect(validator('///a', {})).toEqual('Invalid');
      expect(validator('///', {})).toEqual('Invalid');
      expect(validator('http:///a', {})).toEqual('Invalid');
      expect(validator('foo.com', {})).toEqual('Invalid');
      expect(validator('rdar://1234', {})).toEqual('Invalid');
      expect(validator('h://test', {})).toEqual('Invalid');
      expect(validator('http:// shouldfail.com', {})).toEqual('Invalid');
      expect(validator(':// should fail', {})).toEqual('Invalid');
      expect(validator('http://foo.bar/foo(bar)baz quux', {})).toEqual('Invalid');
      expect(validator('ftps://foo.bar/', {})).toEqual('Invalid');
      expect(validator('http://-error-.invalid/', {})).toEqual('Invalid');
      expect(validator('http://-a.b.co', {})).toEqual('Invalid');
      expect(validator('http://a.b-.co', {})).toEqual('Invalid');
      expect(validator('http://0.0.0.0', {})).toEqual('Invalid');
      expect(validator('http://10.1.1.0', {})).toEqual('Invalid');
      expect(validator('http://10.1.1.255', {})).toEqual('Invalid');
      expect(validator('http://224.1.1.1', {})).toEqual('Invalid');
      expect(validator('http://1.1.1.1.1', {})).toEqual('Invalid');
      expect(validator('http://123.123.123', {})).toEqual('Invalid');
      expect(validator('http://3628126748', {})).toEqual('Invalid');
      expect(validator('http://.www.foo.bar/', {})).toEqual('Invalid');
      expect(validator('http://.www.foo.bar./', {})).toEqual('Invalid');
      expect(validator('http://10.1.1.1', {})).toEqual('Invalid');
      expect(validator('http://localhost', {})).toEqual('Invalid');
    });

    it('allows "valid" urls', () => {
      expect(validator('http://foo.com', {})).toBeUndefined();
      expect(validator('http://foo.com/', {})).toBeUndefined();
      expect(validator('http://foo.com/blah_blah', {})).toBeUndefined();
      expect(validator('http://foo.com/blah_blah/', {})).toBeUndefined();
      expect(validator('http://foo.com/blah_blah_(wikipedia)', {})).toBeUndefined();
      expect(validator('http://foo.com/blah_blah_(wikipedia)_(again)', {})).toBeUndefined();
      expect(validator('http://foo.com?query=bar', {})).toBeUndefined();
      expect(validator('http://foo.com#fragment=bar', {})).toBeUndefined();
      expect(validator('http://www.example.com/wpstyle/?p=364', {})).toBeUndefined();
      expect(validator('https://www.example.com/foo/?bar=baz&inga=42&quux', {})).toBeUndefined();
      expect(validator('https://www.example.com/foo/#bar=baz&inga=42&quux', {})).toBeUndefined();
      expect(validator('http://✪df.ws/123', {})).toBeUndefined();
      expect(validator('http://userid:password@example.com:8080', {})).toBeUndefined();
      expect(validator('http://userid:password@example.com:8080/', {})).toBeUndefined();
      expect(validator('http://userid@example.com', {})).toBeUndefined();
      expect(validator('http://userid@example.com/', {})).toBeUndefined();
      expect(validator('http://userid@example.com:8080', {})).toBeUndefined();
      expect(validator('http://userid@example.com:8080/', {})).toBeUndefined();
      expect(validator('http://userid:password@example.com', {})).toBeUndefined();
      expect(validator('http://userid:password@example.com/', {})).toBeUndefined();
      expect(validator('http://142.42.1.1/', {})).toBeUndefined();
      expect(validator('http://142.42.1.1:8080/', {})).toBeUndefined();
      expect(validator('http://➡.ws/䨹', {})).toBeUndefined();
      expect(validator('http://⌘.ws', {})).toBeUndefined();
      expect(validator('http://⌘.ws/', {})).toBeUndefined();
      expect(validator('http://foo.com/blah_(wikipedia)#cite-1', {})).toBeUndefined();
      expect(validator('http://foo.com/blah_(wikipedia)_blah#cite-1', {})).toBeUndefined();
      expect(validator('http://foo.com/unicode_(✪)_in_parens', {})).toBeUndefined();
      expect(validator('http://foo.com/(something)?after=parens', {})).toBeUndefined();
      expect(validator('http://☺.damowmow.com/', {})).toBeUndefined();
      expect(validator('http://code.google.com/events/#&product=browser', {})).toBeUndefined();
      expect(validator('http://j.mp', {})).toBeUndefined();
      expect(validator('http://foo.bar/?q=Test%20URL-encoded%20stuff', {})).toBeUndefined();
      expect(validator('http://مثال.إختبار', {})).toBeUndefined();
      expect(validator('http://例子.测试', {})).toBeUndefined();
      expect(validator('http://उदाहरण.परीक्षा', {})).toBeUndefined();
      expect(validator('http://-.~_!$&\'()*+,;=:%40:80%2f::::::@example.com', {})).toBeUndefined();
      expect(validator('http://1337.net', {})).toBeUndefined();
      expect(validator('http://a.b-c.de', {})).toBeUndefined();
      expect(validator('http://223.255.255.254', {})).toBeUndefined();
      expect(validator('http://a.b--c.de/', {})).toBeUndefined();
    });
  });

  describe('#alpha', () => {
    const validator = validators.alpha('Invalid');
    it('undefined should be valid', () => expect(validator()).toBeUndefined());
    it('null should be valid', () => expect(validator(null)).toBeUndefined());
    it('empty string should be valid', () => expect(validator('')).toBeUndefined());
    it('blank string should be valid', () => expect(validator('  ')).toBeUndefined());
    it('empty array should be invalid', () => expect(validator([])).toEqual('Invalid'));
    it('empty object should be invalid', () => expect(validator({})).toEqual('Invalid'));
    it('false should be invalid', () => expect(validator(false)).toEqual('Invalid'));
    it('true should be invalid', () => expect(validator(true)).toEqual('Invalid'));
    it('number 0 should be invalid', () => expect(validator(0)).toEqual('Invalid'));
    it('number should be invalid', () => expect(validator(1)).toEqual('Invalid'));
    it('array should be invalid', () => expect(validator([1])).toEqual('Invalid'));
    it('object should be invalid', () => expect(validator({ foo: 'bar' })).toEqual('Invalid'));
    it('123 should be valid', () => expect(validator('123')).toEqual('Invalid'));
    it('FÜübar should be valid', () => expect(validator('FÜübar')).toEqual('Invalid'));
    it(' foo  should be valid', () => expect(validator(' foo ')).toBeUndefined());
    it('foobar should be valid', () => expect(validator('foobar')).toBeUndefined());
    it('all chars should be valid', () => expect(validator(
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ -_',
    )).toBeUndefined());
  });

  describe('#containing', () => {
    const validator = validators.containing(['foo', 'bar']);
    it('undefined should be invalid', () => expect(validator()).toBeDefined());
    it('null should be invalid', () => expect(validator(null)).toBeDefined());
    it('empty string should be invalid', () => expect(validator('')).toBeDefined());
    it('blank string should be invalid', () => expect(validator('  ')).toBeDefined());
    it('empty array should be invalid', () => expect(validator([])).toBeDefined());
    it('empty object should be invalid', () => expect(validator({})).toBeDefined());
    it('false should be invalid', () => expect(validator(false)).toBeDefined());
    it('true should be invalid', () => expect(validator(true)).toBeDefined());
    it('number 0 should be invalid', () => expect(validator(0)).toBeDefined());
    it('number should be invalid', () => expect(validator(1)).toBeDefined());
    it('array should be invalid', () => expect(validator([1])).toBeDefined());
    it('object should be invalid', () => expect(validator({ foo: 'bar' })).toBeDefined());
    it('123 should be invalid', () => expect(validator('123')).toBeDefined());
    it('FÜübar should be invalid', () => expect(validator('FÜübar')).toBeDefined());
    it(' foo  should be invalid', () => expect(validator(' foo ')).toBeDefined());
    it('foo should be valid', () => expect(validator('foo')).toBeUndefined());
    it('bar should be valid', () => expect(validator('bar')).toBeUndefined());
  });

  describe('#excluding', () => {
    const validator = validators.excluding(['foo', 'bar']);
    it('undefined should be valid', () => expect(validator()).toBeUndefined());
    it('null should be valid', () => expect(validator(null)).toBeUndefined());
    it('empty string should be valid', () => expect(validator('')).toBeUndefined());
    it('blank string should be valid', () => expect(validator('  ')).toBeUndefined());
    it('empty array should be valid', () => expect(validator([])).toBeUndefined());
    it('empty object should be valid', () => expect(validator({})).toBeUndefined());
    it('false should be valid', () => expect(validator(false)).toBeUndefined());
    it('true should be valid', () => expect(validator(true)).toBeUndefined());
    it('number 0 should valid', () => expect(validator(0)).toBeUndefined());
    it('number should valid', () => expect(validator(1)).toBeUndefined());
    it('array should be valid', () => expect(validator([1])).toBeUndefined());
    it('object should be valid', () => expect(validator({ foo: 'bar' })).toBeUndefined());
    it('123 should be valid', () => expect(validator('123')).toBeUndefined());
    it('FÜübar should be valid', () => expect(validator('FÜübar')).toBeUndefined());
    it(' foo  should be valid', () => expect(validator(' foo ')).toBeUndefined());
    it('foo should be invalid', () => expect(validator('foo')).toBeDefined());
    it('bar should be invalid', () => expect(validator('bar')).toBeDefined());
  });

  describe('#min', () => {
    const validator = validators.min(5, 'Invalid');
    it('undefined should be valid', () => expect(validator()).toBeUndefined());
    it('null should be valid', () => expect(validator(null)).toBeUndefined());
    it('empty string should be invalid', () => expect(validator('')).toEqual('Invalid'));
    it('blank string should be invalid', () => expect(validator('  ')).toEqual('Invalid'));
    it('empty array should be invalid', () => expect(validator([])).toEqual('Invalid'));
    it('empty object should be invalid', () => expect(validator({})).toEqual('Invalid'));
    it('false should be invalid', () => expect(validator(false)).toEqual('Invalid'));
    it('true should be invalid', () => expect(validator(true)).toEqual('Invalid'));
    it('number 0 should invalid', () => expect(validator(0)).toEqual('Invalid'));
    it('number should invalid', () => expect(validator(1)).toEqual('Invalid'));
    it('array should be invalid', () => expect(validator([1])).toEqual('Invalid'));
    it('object should be invalid', () => expect(validator({ foo: 'bar' })).toEqual('Invalid'));
    it('foo should be invalid', () => expect(validator('foo')).toEqual('Invalid'));
    it('3 should be valid', () => expect(validator(3)).toEqual('Invalid'));
    it('123 should be valid', () => expect(validator(123)).toBeUndefined());
    it('Array with 5 items should be valid', () => expect(validator([1, 2, 3, 4, 5])).toBeUndefined());
    it('Object with 5 keys should be valid', () => expect(validator(
      _.reduce([1, 2, 3, 4, 5], (obj, i) => ({ [i]: i, ...obj }), {}),
    )).toBeUndefined());

    it('throws error for invalid minimum value', () => {
      expect(() => validators.min()).toThrowError();
      expect(() => validators.min('invalid')).toThrowError();
    });

    it('allows negative values for min validators', () => {
      const minValidator = validators.min(-5, 'Invalid');
      expect(minValidator(-5)).toBeUndefined();
    });
  });

  describe('#max', () => {
    const validator = validators.max(5, 'Invalid');
    it('undefined should be valid', () => expect(validator()).toBeUndefined());
    it('null should be valid', () => expect(validator(null)).toBeUndefined());
    it('empty string should be valid', () => expect(validator('')).toBeUndefined());
    it('blank string should be valid', () => expect(validator('  ')).toBeUndefined());
    it('empty array should be valid', () => expect(validator([])).toBeUndefined());
    it('empty object should be valid', () => expect(validator({})).toBeUndefined());
    it('false should be invalid', () => expect(validator(false)).toEqual('Invalid'));
    it('true should be invalid', () => expect(validator(true)).toEqual('Invalid'));
    it('number 0 should valid', () => expect(validator(0)).toBeUndefined());
    it('empty array should be valid', () => expect(validator([1])).toBeUndefined());
    it('empty object should be valid', () => expect(validator({})).toBeUndefined());
    it('foo should be valid', () => expect(validator('foo')).toBeUndefined());
    it('foobar should be invalid', () => expect(validator('foobar')).toEqual('Invalid'));
    it('123 should be invalid', () => expect(validator(123)).toEqual('Invalid'));
    it('3 should be valid', () => expect(validator(3)).toBeUndefined());
    it('Array with 3 items should be valid', () => expect(validator([1, 2, 3])).toBeUndefined());
    it('Object with 3 keys should be valid', () => expect(validator(
      _.reduce([1, 2, 3], (obj, i) => ({ [i]: i, ...obj }), {}),
    )).toBeUndefined());

    it('throws error for invalid maximum value', () => {
      expect(() => validators.max()).toThrowError();
      expect(() => validators.max('invalid')).toThrowError();
    });

    it('allows negative values for max validators', () => {
      const maxValidator = validators.max(-5, 'Invalid');
      expect(maxValidator(-5)).toBeUndefined();
    });
  });

  describe('#range', () => {
    const validator = validators.between(5, 10, 'Invalid');
    it('undefined should be valid', () => expect(validator()).toBeUndefined());
    it('null should be valid', () => expect(validator(null)).toBeUndefined());
    it('empty string should be invalid', () => expect(validator('')).toEqual('Invalid'));
    it('blank string should be invalid', () => expect(validator('  ')).toEqual('Invalid'));
    it('empty array should be invalid', () => expect(validator([])).toEqual('Invalid'));
    it('empty object should be invalid', () => expect(validator({})).toEqual('Invalid'));
    it('false should be invalid', () => expect(validator(false)).toEqual('Invalid'));
    it('true should be invalid', () => expect(validator(true)).toEqual('Invalid'));
    it('number 0 should valid', () => expect(validator(0)).toEqual('Invalid'));
    it('empty array should be valid', () => expect(validator([1])).toEqual('Invalid'));
    it('empty object should be valid', () => expect(validator({})).toEqual('Invalid'));
    it('foo should be invalid', () => expect(validator('foo')).toEqual('Invalid'));
    it('foobar should be valid', () => expect(validator('foobar')).toBeUndefined());
    it('123 should be invalid', () => expect(validator(123)).toEqual('Invalid'));
    it('3 should be invalid', () => expect(validator(3)).toEqual('Invalid'));
    it('Array with 6 items should be valid', () => expect(validator([1, 2, 3, 4, 5, 6])).toBeUndefined());
    it('Object with 6 keys should be valid', () => expect(validator(
      _.reduce([1, 2, 3, 4, 5, 6], (obj, i) => ({ [i]: i, ...obj }), {}),
    )).toBeUndefined());

    it('throws error for invalid ranges', () => {
      expect(() => validators.between(null, 1)).toThrowError();
      expect(() => validators.between(5, 3)).toThrowError();
      expect(() => validators.between(1, null)).toThrowError();
    });

    it('Allows negative minimum and maximum ranges', () => {
      const negativeValidator = validators.between(-5, -3);
      expect(negativeValidator(-4)).toBeUndefined();
    });
  });

  describe('formatTemplate', () => expect(
    validators.formatTemplate('First: {0}, Third: {2}, Second: {1}, Unknown: {3}', [1, 2, 3]),
  ).toEqual('First: 1, Third: 3, Second: 2, Unknown: {3}'));
});
