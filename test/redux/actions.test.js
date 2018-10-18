import { expect } from 'chai';

import * as Actions from '../../src/redux/actions';

describe('redux/actions', () => {
  describe('#noArgs()', () => {
    it('should return undefined', () => expect(Actions.noArgs()).to.be.undefined);
  });

  describe('#getArg()', () => {
    it('should return first argument', () => {
      const args = Actions.getArg(0);

      expect(args(1, 2, 3)).to.equal(1);
      expect(args(1)).to.equal(1);
    });

    it('should return second argument', () => {
      const args = Actions.getArg(1);

      expect(args(1, 2, 3)).to.equal(2);
      expect(args(1)).to.equal(undefined);
    });
  });

  describe('#getArg()', () => {
    it('should return named argument', () => {
      const args = Actions.argsAs(0, 'foo');

      expect(args('bar')).to.deep.equal({ foo: 'bar' });
      expect(args()).to.deep.equal({ foo: undefined });
    });
  });

  describe('#createActionNoArgs()', () => {
    const action = Actions.createActionNoArgs('action/type');

    it('should create an action creator function', () => expect(action).to.be.an('function'));
    it('should return an redux action type', () => expect(action()).to.deep.equal({ type: 'action/type' }));
    it('should ignore passed arguments', () => expect(action('foo', 'bar')).to.deep.equal({ type: 'action/type' }));
  });

  describe('#createActionWithPayload()', () => {
    const action = Actions.createActionWithPayload('action/type');

    it('should create an action creator function', () => expect(action).to.be.an('function'));
    it('should return an redux action type', () => expect(action()).to.deep.equal({ type: 'action/type' }));
    it('should pass payload argument', () => expect(action('foo', 'bar')).to.deep.equal({
      type: 'action/type', payload: 'foo',
    }));
  });

  describe('#createActionWithMeta()', () => {
    const action = Actions.createActionWithMeta('action/type', ['foo', 'bar']);

    it('should create an action creator function', () => expect(action).to.be.an('function'));
    it('should return an redux action type', () => expect(action()).to.deep.equal({
      type: 'action/type', meta: { foo: undefined, bar: undefined },
    }));
    it('should contain foo meta value', () => expect(action('foo')).to.deep.equal({
      type: 'action/type', meta: { foo: 'foo', bar: undefined },
    }));
    it('should contain foo and bar meta values', () => expect(action('foo', 'bar')).to.deep.equal({
      type: 'action/type', meta: { foo: 'foo', bar: 'bar' },
    }));
    it('should ignore baz value', () => expect(action('foo', 'bar', 'baz')).to.deep.equal({
      type: 'action/type', meta: { foo: 'foo', bar: 'bar' },
    }));
  });

  describe('#createActionWithPayloadAndMeta()', () => {
    const action = Actions.createActionWithPayloadAndMeta('action/type', ['foo', 'bar']);

    it('should create an action creator function', () => expect(action).to.be.an('function'));
    it('should return an redux action type', () => expect(action()).to.deep.equal({
      type: 'action/type', meta: { foo: undefined, bar: undefined },
    }));
    it('should data with no meta', () => expect(action('data')).to.deep.equal({
      type: 'action/type', payload: 'data', meta: { foo: undefined, bar: undefined },
    }));
    it('should contain data with foo meta value', () => expect(action('data', 'foo')).to.deep.equal({
      type: 'action/type', payload: 'data', meta: { foo: 'foo', bar: undefined },
    }));
    it('should contain data with foo and bar meta values', () => expect(action('data', 'foo', 'bar')).to.deep.equal({
      type: 'action/type', payload: 'data', meta: { foo: 'foo', bar: 'bar' },
    }));
    it('should ignore baz value', () => expect(action('data', 'foo', 'bar', 'baz')).to.deep.equal({
      type: 'action/type', payload: 'data', meta: { foo: 'foo', bar: 'bar' },
    }));
  });
});
