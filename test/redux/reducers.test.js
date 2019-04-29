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
    ).toHaveProperty('foo', 'baz'));

    it('should replace object by path in the state', () => expect(
      Reducers.setInState(state, 'deep', { c: 3 }),
    ).toHaveProperty('deep', { c: 3 }));

    it('should add value by path in the state', () => expect(
      Reducers.setInState(state, 'baz', 'baz'),
    ).toHaveProperty('baz', 'baz'));

    it('should set deep value by path in the state', () => expect(
      Reducers.setInState(state, 'deep.a', 3),
    ).toHaveProperty('deep.a', 3));

    it('should set deep, deep value by path in the state', () => expect(
      Reducers.setInState(state, 'deep.c.d', 6),
    ).toHaveProperty('deep.c.d', 6));
  });

  describe('#omitInState()', () => {
    it('should remove value by path in the state', () => expect(
      Reducers.omitInState(state, 'foo'),
    ).not.toHaveProperty('foo'));

    it('should remove deep value by path in the state', () => expect(
      Reducers.omitInState(state, 'deep.a'),
    ).not.toHaveProperty('deep.a'));

    it('should remove deep, deep value by path in the state', () => expect(
      Reducers.omitInState(state, 'deep.c.d'),
    ).not.toHaveProperty('deep.c.d'));
  });

  describe('#mergeInState()', () => {
    it('should update deep value', () => expect(
      Reducers.mergeInState(state, 'deep', { b: 3 }),
    ).toHaveProperty('deep', { a: 1, b: 3, c: { d: 3 } }));

    it('should merge object', () => expect(
      Reducers.mergeInState(state, 'deep', { a: 3, c: 4 }),
    ).toHaveProperty('deep', { a: 3, b: 2, c: 4 }));

    it('should merge deep object', () => expect(
      Reducers.mergeInState(state, 'deep.c', { d: 1, e: 6 }),
    ).toHaveProperty('deep.c', { d: 1, e: 6 }));
  });

  describe('#assignInState()', () => {
    it('should update deep value', () => expect(
      Reducers.assignInState(state, 'deep', { b: 3 }),
    ).toHaveProperty('deep', { a: 1, b: 3, c: { d: 3 } }));

    it('should assign object', () => expect(
      Reducers.assignInState(state, 'deep', { a: 3, c: 4 }),
    ).toHaveProperty('deep', { a: 3, b: 2, c: 4 }));

    it('should assign deep object', () => expect(
      Reducers.mergeInState(state, 'deep.c', { d: 1, e: 6 }),
    ).toHaveProperty('deep.c', { d: 1, e: 6 }));
  });
});
