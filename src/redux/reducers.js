import _ from 'lodash';

function mutateDeep(state, path, mutator) {
  const [top, ...rest] = path.split('.');

  if (rest.length === 0) {
    const nextState = {
      ...state,
      [top]: mutator(state[top]),
    };

    // Remove the next value if undefined
    if (undefined === nextState[top]) {
      delete nextState[top];
    }

    return nextState;
  }

  return {
    ...state,
    [top]: mutateDeep(state[top], rest.join('.'), mutator),
  };
}


/**
 * Set a deep value in the redux state.
 *
 * @param state
 * @param path
 * @param value
 */
export const setInState = (state, path, value) => mutateDeep(state, path, () => value);

/**
 * Omit a deep value in the redux state.
 *
 * @param state
 * @param path
 */
export const omitInState = (state, path) => mutateDeep(state, path, () => undefined);

/**
 * Merge an object at a deep path in the redux state.
 *
 * @param state
 * @param path
 * @param value
 */
export const mergeInState = (state, path, value) => mutateDeep(
  state, path, currValue => _.merge(_.cloneDeep(currValue), value),
);

/**
 * Assigns values from an object at a deep path in the redux state.
 *
 * @param state
 * @param path
 * @param value
 */
export const assignInState = (state, path, value) => mutateDeep(
  state, path, currValue => _.assign(_.cloneDeep(currValue), value),
);
