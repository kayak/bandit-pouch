import _ from 'lodash';
import { expect } from 'chai';

import validators, { formatTemplate } from '../../src/forms/validators';

describe('validators', () => {
  describe('#required', () => {
    const validator = validators.required('Required');
    it('undefined should be required', () => expect(validator()).to.equal('Required'));
    it('null should be required', () => expect(validator(null)).to.equal('Required'));
    it('empty string should be required', () => expect(validator('')).to.equal('Required'));
    it('blank string should be required', () => expect(validator('  ')).to.equal('Required'));
    it('empty array should be required', () => expect(validator([])).to.equal('Required'));
    it('empty object should be required', () => expect(validator({})).to.equal('Required'));
    it('false should not be required', () => expect(validator(false)).to.equal(undefined));
    it('true should not be required', () => expect(validator(true)).to.equal(undefined));
    it('foobar should not be required', () => expect(validator('foobar')).to.equal(undefined));
    it('number 0 should not be required', () => expect(validator(0)).to.equal(undefined));
    it('number should not be required', () => expect(validator(1)).to.equal(undefined));
    it('array should not be required', () => expect(validator([1])).to.equal(undefined));
    it('object should not be required', () => expect(validator({ foo: 'bar' })).to.equal(undefined));
  });

  describe('#regex', () => {
    const validator = validators.regex(/^foobar$/i, 'Invalid');
    it('undefined should be valid', () => expect(validator()).to.equal(undefined));
    it('null should be valid', () => expect(validator(null)).to.equal(undefined));
    it('empty string should be invalid', () => expect(validator('')).to.equal('Invalid'));
    it('blank string should be invalid', () => expect(validator('  ')).to.equal('Invalid'));
    it('empty array should be invalid', () => expect(validator([])).to.equal('Invalid'));
    it('empty object should be invalid', () => expect(validator({})).to.equal('Invalid'));
    it('false should be invalid', () => expect(validator(false)).to.equal('Invalid'));
    it('true should be invalid', () => expect(validator(true)).to.equal('Invalid'));
    it('FooBar-Baz should be invalid', () => expect(validator('FooBar-Baz')).to.equal('Invalid'));
    it('foo bar should be invalid', () => expect(validator('foo bar')).to.equal('Invalid'));
    it('foobar-baz should be invalid', () => expect(validator('foobar-baz')).to.equal('Invalid'));
    it('foobar should be valid', () => expect(validator('foobar')).to.equal(undefined));

    it('throws error for invalid pattern', () => {
      expect(() => validators.regex()).to.throw();
      expect(() => validators.regex(false, 'Invalid')).to.throw();
      expect(() => validators.regex('invalid pattern', 'Invalid')).to.throw();
    });
  });

  describe('#url', () => {
    const validator = validators.url('Invalid');
    it('undefined should be valid', () => expect(validator()).to.equal(undefined));
    it('null should be valid', () => expect(validator(null)).to.equal(undefined));
    it('empty string should be invalid', () => expect(validator('')).to.equal('Invalid'));
    it('blank string should be invalid', () => expect(validator('  ')).to.equal('Invalid'));
    it('empty array should be invalid', () => expect(validator([])).to.equal('Invalid'));
    it('empty object should be invalid', () => expect(validator({})).to.equal('Invalid'));
    it('false should be invalid', () => expect(validator(false)).to.equal('Invalid'));
    it('true should be invalid', () => expect(validator(true)).to.equal('Invalid'));

    it('doesn\'t allow "invalid" urls', () => {
      expect(validator(' ', {})).to.equal('Invalid');
      expect(validator('http://', {})).to.equal('Invalid');
      expect(validator('http://.', {})).to.equal('Invalid');
      expect(validator('http://..', {})).to.equal('Invalid');
      expect(validator('http://../', {})).to.equal('Invalid');
      expect(validator('http://?', {})).to.equal('Invalid');
      expect(validator('http://??', {})).to.equal('Invalid');
      expect(validator('http://??/', {})).to.equal('Invalid');
      expect(validator('http://#', {})).to.equal('Invalid');
      expect(validator('http://##', {})).to.equal('Invalid');
      expect(validator('http://##/', {})).to.equal('Invalid');
      expect(validator('http://foo.bar?q=Spaces should be encoded', {})).to.equal('Invalid');
      expect(validator('//', {})).to.equal('Invalid');
      expect(validator('//a', {})).to.equal('Invalid');
      expect(validator('///a', {})).to.equal('Invalid');
      expect(validator('///', {})).to.equal('Invalid');
      expect(validator('http:///a', {})).to.equal('Invalid');
      expect(validator('foo.com', {})).to.equal('Invalid');
      expect(validator('rdar://1234', {})).to.equal('Invalid');
      expect(validator('h://test', {})).to.equal('Invalid');
      expect(validator('http:// shouldfail.com', {})).to.equal('Invalid');
      expect(validator(':// should fail', {})).to.equal('Invalid');
      expect(validator('http://foo.bar/foo(bar)baz quux', {})).to.equal('Invalid');
      expect(validator('ftps://foo.bar/', {})).to.equal('Invalid');
      expect(validator('http://-error-.invalid/', {})).to.equal('Invalid');
      expect(validator('http://-a.b.co', {})).to.equal('Invalid');
      expect(validator('http://a.b-.co', {})).to.equal('Invalid');
      expect(validator('http://0.0.0.0', {})).to.equal('Invalid');
      expect(validator('http://10.1.1.0', {})).to.equal('Invalid');
      expect(validator('http://10.1.1.255', {})).to.equal('Invalid');
      expect(validator('http://224.1.1.1', {})).to.equal('Invalid');
      expect(validator('http://1.1.1.1.1', {})).to.equal('Invalid');
      expect(validator('http://123.123.123', {})).to.equal('Invalid');
      expect(validator('http://3628126748', {})).to.equal('Invalid');
      expect(validator('http://.www.foo.bar/', {})).to.equal('Invalid');
      expect(validator('http://.www.foo.bar./', {})).to.equal('Invalid');
      expect(validator('http://10.1.1.1', {})).to.equal('Invalid');
      expect(validator('http://localhost', {})).to.equal('Invalid');
    });

    it('allows "valid" urls', () => {
      expect(validator('http://foo.com', {})).to.equal(undefined);
      expect(validator('http://foo.com/', {})).to.equal(undefined);
      expect(validator('http://foo.com/blah_blah', {})).to.equal(undefined);
      expect(validator('http://foo.com/blah_blah/', {})).to.equal(undefined);
      expect(validator('http://foo.com/blah_blah_(wikipedia)', {})).to.equal(undefined);
      expect(validator('http://foo.com/blah_blah_(wikipedia)_(again)', {})).to.equal(undefined);
      expect(validator('http://foo.com?query=bar', {})).to.equal(undefined);
      expect(validator('http://foo.com#fragment=bar', {})).to.equal(undefined);
      expect(validator('http://www.example.com/wpstyle/?p=364', {})).to.equal(undefined);
      expect(validator('https://www.example.com/foo/?bar=baz&inga=42&quux', {})).to.equal(undefined);
      expect(validator('https://www.example.com/foo/#bar=baz&inga=42&quux', {})).to.equal(undefined);
      expect(validator('http://✪df.ws/123', {})).to.equal(undefined);
      expect(validator('http://userid:password@example.com:8080', {})).to.equal(undefined);
      expect(validator('http://userid:password@example.com:8080/', {})).to.equal(undefined);
      expect(validator('http://userid@example.com', {})).to.equal(undefined);
      expect(validator('http://userid@example.com/', {})).to.equal(undefined);
      expect(validator('http://userid@example.com:8080', {})).to.equal(undefined);
      expect(validator('http://userid@example.com:8080/', {})).to.equal(undefined);
      expect(validator('http://userid:password@example.com', {})).to.equal(undefined);
      expect(validator('http://userid:password@example.com/', {})).to.equal(undefined);
      expect(validator('http://142.42.1.1/', {})).to.equal(undefined);
      expect(validator('http://142.42.1.1:8080/', {})).to.equal(undefined);
      expect(validator('http://➡.ws/䨹', {})).to.equal(undefined);
      expect(validator('http://⌘.ws', {})).to.equal(undefined);
      expect(validator('http://⌘.ws/', {})).to.equal(undefined);
      expect(validator('http://foo.com/blah_(wikipedia)#cite-1', {})).to.equal(undefined);
      expect(validator('http://foo.com/blah_(wikipedia)_blah#cite-1', {})).to.equal(undefined);
      expect(validator('http://foo.com/unicode_(✪)_in_parens', {})).to.equal(undefined);
      expect(validator('http://foo.com/(something)?after=parens', {})).to.equal(undefined);
      expect(validator('http://☺.damowmow.com/', {})).to.equal(undefined);
      expect(validator('http://code.google.com/events/#&product=browser', {})).to.equal(undefined);
      expect(validator('http://j.mp', {})).to.equal(undefined);
      expect(validator('http://foo.bar/?q=Test%20URL-encoded%20stuff', {})).to.equal(undefined);
      expect(validator('http://مثال.إختبار', {})).to.equal(undefined);
      expect(validator('http://例子.测试', {})).to.equal(undefined);
      expect(validator('http://उदाहरण.परीक्षा', {})).to.equal(undefined);
      expect(validator('http://-.~_!$&\'()*+,;=:%40:80%2f::::::@example.com', {})).to.equal(undefined);
      expect(validator('http://1337.net', {})).to.equal(undefined);
      expect(validator('http://a.b-c.de', {})).to.equal(undefined);
      expect(validator('http://223.255.255.254', {})).to.equal(undefined);
      expect(validator('http://a.b--c.de/', {})).to.equal(undefined);
    });
  });

  describe('#alpha', () => {
    const validator = validators.alpha('Invalid');
    it('undefined should be valid', () => expect(validator()).to.equal(undefined));
    it('null should be valid', () => expect(validator(null)).to.equal(undefined));
    it('empty string should be valid', () => expect(validator('')).to.equal(undefined));
    it('blank string should be valid', () => expect(validator('  ')).to.equal(undefined));
    it('empty array should be invalid', () => expect(validator([])).to.equal('Invalid'));
    it('empty object should be invalid', () => expect(validator({})).to.equal('Invalid'));
    it('false should be invalid', () => expect(validator(false)).to.equal('Invalid'));
    it('true should be invalid', () => expect(validator(true)).to.equal('Invalid'));
    it('number 0 should be invalid', () => expect(validator(0)).to.equal('Invalid'));
    it('number should be invalid', () => expect(validator(1)).to.equal('Invalid'));
    it('array should be invalid', () => expect(validator([1])).to.equal('Invalid'));
    it('object should be invalid', () => expect(validator({ foo: 'bar' })).to.equal('Invalid'));
    it('123 should be valid', () => expect(validator('123')).to.equal('Invalid'));
    it('FÜübar should be valid', () => expect(validator('FÜübar')).to.equal('Invalid'));
    it(' foo  should be valid', () => expect(validator(' foo ')).to.equal(undefined));
    it('foobar should be valid', () => expect(validator('foobar')).to.equal(undefined));
    it('all chars should be valid', () => expect(validator(
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ -_',
    )).to.equal(undefined));
  });

  describe('#containing', () => {
    const validator = validators.containing(['foo', 'bar']);
    it('undefined should be invalid', () => expect(validator()).to.not.equal(undefined));
    it('null should be invalid', () => expect(validator(null)).to.not.equal(undefined));
    it('empty string should be invalid', () => expect(validator('')).to.not.equal(undefined));
    it('blank string should be invalid', () => expect(validator('  ')).to.not.equal(undefined));
    it('empty array should be invalid', () => expect(validator([])).to.not.equal(undefined));
    it('empty object should be invalid', () => expect(validator({})).to.not.equal(undefined));
    it('false should be invalid', () => expect(validator(false)).to.not.equal(undefined));
    it('true should be invalid', () => expect(validator(true)).to.not.equal(undefined));
    it('number 0 should be invalid', () => expect(validator(0)).to.not.equal(undefined));
    it('number should be invalid', () => expect(validator(1)).to.not.equal(undefined));
    it('array should be invalid', () => expect(validator([1])).to.not.equal(undefined));
    it('object should be invalid', () => expect(validator({ foo: 'bar' })).to.not.equal(undefined));
    it('123 should be invalid', () => expect(validator('123')).to.not.equal(undefined));
    it('FÜübar should be invalid', () => expect(validator('FÜübar')).to.not.equal(undefined));
    it(' foo  should be invalid', () => expect(validator(' foo ')).to.not.equal(undefined));
    it('foo should be valid', () => expect(validator('foo')).to.equal(undefined));
    it('bar should be valid', () => expect(validator('bar')).to.equal(undefined));
  });

  describe('#excluding', () => {
    const validator = validators.excluding(['foo', 'bar']);
    it('undefined should be valid', () => expect(validator()).to.equal(undefined));
    it('null should be valid', () => expect(validator(null)).to.equal(undefined));
    it('empty string should be valid', () => expect(validator('')).to.equal(undefined));
    it('blank string should be valid', () => expect(validator('  ')).to.equal(undefined));
    it('empty array should be valid', () => expect(validator([])).to.equal(undefined));
    it('empty object should be valid', () => expect(validator({})).to.equal(undefined));
    it('false should be valid', () => expect(validator(false)).to.equal(undefined));
    it('true should be valid', () => expect(validator(true)).to.equal(undefined));
    it('number 0 should valid', () => expect(validator(0)).to.equal(undefined));
    it('number should valid', () => expect(validator(1)).to.equal(undefined));
    it('array should be valid', () => expect(validator([1])).to.equal(undefined));
    it('object should be valid', () => expect(validator({ foo: 'bar' })).to.equal(undefined));
    it('123 should be valid', () => expect(validator('123')).to.equal(undefined));
    it('FÜübar should be valid', () => expect(validator('FÜübar')).to.equal(undefined));
    it(' foo  should be valid', () => expect(validator(' foo ')).to.equal(undefined));
    it('foo should be invalid', () => expect(validator('foo')).to.not.equal(undefined));
    it('bar should be invalid', () => expect(validator('bar')).to.not.equal(undefined));
  });

  describe('#min', () => {
    const validator = validators.min(5, 'Invalid');
    it('undefined should be valid', () => expect(validator()).to.equal(undefined));
    it('null should be valid', () => expect(validator(null)).to.equal(undefined));
    it('empty string should be invalid', () => expect(validator('')).to.equal('Invalid'));
    it('blank string should be invalid', () => expect(validator('  ')).to.equal('Invalid'));
    it('empty array should be invalid', () => expect(validator([])).to.equal('Invalid'));
    it('empty object should be invalid', () => expect(validator({})).to.equal('Invalid'));
    it('false should be invalid', () => expect(validator(false)).to.equal('Invalid'));
    it('true should be invalid', () => expect(validator(true)).to.equal('Invalid'));
    it('number 0 should invalid', () => expect(validator(0)).to.equal('Invalid'));
    it('number should invalid', () => expect(validator(1)).to.equal('Invalid'));
    it('array should be invalid', () => expect(validator([1])).to.equal('Invalid'));
    it('object should be invalid', () => expect(validator({ foo: 'bar' })).to.equal('Invalid'));
    it('foo should be invalid', () => expect(validator('foo')).to.equal('Invalid'));
    it('3 should be valid', () => expect(validator(3)).to.equal('Invalid'));
    it('123 should be valid', () => expect(validator(123)).to.equal(undefined));
    it('Array with 5 items should be valid', () => expect(validator([1, 2, 3, 4, 5])).to.equal(undefined));
    it('Object with 5 keys should be valid', () => expect(validator(
      _.reduce([1, 2, 3, 4, 5], (obj, i) => ({ [i]: i, ...obj }), {}),
    )).to.equal(undefined));

    it('throws error for invalid minimum value', () => {
      expect(() => validators.min()).to.throw();
      expect(() => validators.min(-1)).to.throw();
      expect(() => validators.min(0.5)).to.throw();
    });
  });

  describe('#max', () => {
    const validator = validators.max(5, 'Invalid');
    it('undefined should be valid', () => expect(validator()).to.equal(undefined));
    it('null should be valid', () => expect(validator(null)).to.equal(undefined));
    it('empty string should be valid', () => expect(validator('')).to.equal(undefined));
    it('blank string should be valid', () => expect(validator('  ')).to.equal(undefined));
    it('empty array should be valid', () => expect(validator([])).to.equal(undefined));
    it('empty object should be valid', () => expect(validator({})).to.equal(undefined));
    it('false should be invalid', () => expect(validator(false)).to.equal('Invalid'));
    it('true should be invalid', () => expect(validator(true)).to.equal('Invalid'));
    it('number 0 should valid', () => expect(validator(0)).to.equal(undefined));
    it('empty array should be valid', () => expect(validator([1])).to.equal(undefined));
    it('empty object should be valid', () => expect(validator({})).to.equal(undefined));
    it('foo should be valid', () => expect(validator('foo')).to.equal(undefined));
    it('foobar should be invalid', () => expect(validator('foobar')).to.equal('Invalid'));
    it('123 should be invalid', () => expect(validator(123)).to.equal('Invalid'));
    it('3 should be valid', () => expect(validator(3)).to.equal(undefined));
    it('Array with 3 items should be valid', () => expect(validator([1, 2, 3])).to.equal(undefined));
    it('Object with 3 keys should be valid', () => expect(validator(
      _.reduce([1, 2, 3], (obj, i) => ({ [i]: i, ...obj }), {}),
    )).to.equal(undefined));

    it('throws error for invalid maximum value', () => {
      expect(() => validators.max()).to.throw();
      expect(() => validators.max(-1)).to.throw();
      expect(() => validators.max(0.5)).to.throw();
    });
  });

  describe('#range', () => {
    const validator = validators.between(5, 10, 'Invalid');
    it('undefined should be valid', () => expect(validator()).to.equal(undefined));
    it('null should be valid', () => expect(validator(null)).to.equal(undefined));
    it('empty string should be invalid', () => expect(validator('')).to.equal('Invalid'));
    it('blank string should be invalid', () => expect(validator('  ')).to.equal('Invalid'));
    it('empty array should be invalid', () => expect(validator([])).to.equal('Invalid'));
    it('empty object should be invalid', () => expect(validator({})).to.equal('Invalid'));
    it('false should be invalid', () => expect(validator(false)).to.equal('Invalid'));
    it('true should be invalid', () => expect(validator(true)).to.equal('Invalid'));
    it('number 0 should valid', () => expect(validator(0)).to.equal('Invalid'));
    it('empty array should be valid', () => expect(validator([1])).to.equal('Invalid'));
    it('empty object should be valid', () => expect(validator({})).to.equal('Invalid'));
    it('foo should be invalid', () => expect(validator('foo')).to.equal('Invalid'));
    it('foobar should be valid', () => expect(validator('foobar')).to.equal(undefined));
    it('123 should be invalid', () => expect(validator(123)).to.equal('Invalid'));
    it('3 should be invalid', () => expect(validator(3)).to.equal('Invalid'));
    it('Array with 6 items should be valid', () => expect(validator([1, 2, 3, 4, 5, 6])).to.equal(undefined));
    it('Object with 6 keys should be valid', () => expect(validator(
      _.reduce([1, 2, 3, 4, 5, 6], (obj, i) => ({ [i]: i, ...obj }), {}),
    )).to.equal(undefined));

    it('throws error for invalid ranges', () => {
      expect(() => validators.between(null, 1)).to.throw();
      expect(() => validators.between(-1, 1)).to.throw();
      expect(() => validators.between(0.5, 1)).to.throw();
      expect(() => validators.between(5, 3)).to.throw();
      expect(() => validators.between(1, null)).to.throw();
    });
  });

  describe('formatTemplate', () => expect(
    formatTemplate('First: {0}, Third: {2}, Second: {1}, Unknown: {3}', [1, 2, 3]),
  ).to.equal('First: 1, Third: 3, Second: 2, Unknown: {3}'));
});
