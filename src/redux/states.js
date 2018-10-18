/**
 * These functions are used by reducers to create standard values in the redux store. They represent different states
 * that the data in the store can be in.
 */
export default ({
  initial: () => ({
    loading: false,
  }),
  loading: data => ({
    ...data,
    loading: true,
  }),
  storing: () => ({
    storing: true,
  }),
  stored: data => ({
    ...data,
    storing: false,
  }),
  storeError: error => ({
    storing: false,
    error,
  }),
  deleting: () => ({
    deleting: true,
  }),
  deleted: () => ({
    deleting: false,
  }),
  found: data => ({
    ...data,
    loading: false,
  }),
  error: error => ({
    loading: false,
    error,
  }),
  reverting: () => ({
    reverting: true,
  }),
  reverted: () => ({
    reverting: false,
  }),
});
