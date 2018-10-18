import { expect } from 'chai';

import * as Reducers from '../../src/redux/reducers';

describe('redux/reducers', () => {
  let state;

  beforeEach(() => {
    state = {
      foo: 'bar',
      deep: {
        a: 1,
        b: 2,
        c: { d: 3 },
      },
    };
  });

  describe('#setInState()', () => {
    it('should set value by path in the state', () => expect(
      Reducers.setInState(state, 'foo', 'baz'),
    ).to.have.property('foo', 'baz'));

    it('should replace object by path in the state', () => expect(
      Reducers.setInState(state, 'deep', { c: 3 }),
    ).to.have.deep.nested.property('deep', { c: 3 }));

    it('should add value by path in the state', () => expect(
      Reducers.setInState(state, 'baz', 'baz'),
    ).to.have.property('baz', 'baz'));

    it('should set deep value by path in the state', () => expect(
      Reducers.setInState(state, 'deep.a', 3),
    ).to.have.nested.property('deep.a', 3));

    it('should set deep, deep value by path in the state', () => expect(
      Reducers.setInState(state, 'deep.c.d', 6),
    ).to.have.nested.property('deep.c.d', 6));
  });

  describe('#omitInState()', () => {
    it('should remove value by path in the state', () => expect(
      Reducers.omitInState(state, 'foo'),
    ).to.not.have.property('foo'));

    it('should remove deep value by path in the state', () => expect(
      Reducers.omitInState(state, 'deep.a'),
    ).to.not.have.nested.property('deep.a'));

    it('should remove deep, deep value by path in the state', () => expect(
      Reducers.omitInState(state, 'deep.c.d'),
    ).to.not.have.nested.property('deep.c.d'));
  });

  describe('#mergeInState()', () => {
    it('should update deep value', () => expect(
      Reducers.mergeInState(state, 'deep', { b: 3 }),
    ).to.have.deep.nested.property('deep', { a: 1, b: 3, c: { d: 3 } }));

    it('should merge object', () => expect(
      Reducers.mergeInState(state, 'deep', { a: 3, c: 4 }),
    ).to.have.deep.nested.property('deep', { a: 3, b: 2, c: 4 }));

    it('should merge deep object', () => expect(
      Reducers.mergeInState(state, 'deep.c', { d: 1, e: 6 }),
    ).to.have.deep.nested.property('deep.c', { d: 1, e: 6 }));
  });

  describe('#assignInState()', () => {
    it('should update deep value', () => expect(
      Reducers.assignInState(state, 'deep', { b: 3 }),
    ).to.have.deep.nested.property('deep', { a: 1, b: 3, c: { d: 3 } }));

    it('should assign object', () => expect(
      Reducers.assignInState(state, 'deep', { a: 3, c: 4 }),
    ).to.have.deep.nested.property('deep', { a: 3, b: 2, c: 4 }));

    it('should assign deep object', () => expect(
      Reducers.mergeInState(state, 'deep.c', { d: 1, e: 6 }),
    ).to.have.deep.nested.property('deep.c', { d: 1, e: 6 }));
  });
});
