import axios from 'axios';
import RequestManager from 'axios-request-manager';
import { assert } from '../utils';

const manager = new RequestManager();

const invokeAction = (actions = {}, name, ...args) => {
  const action = actions[name];
  assert(typeof actions[name] === 'function', `Your Actions object must have a '${name}' Action handler function`);
  return action(...args);
};

const constructHeaders = headers => ({
  ...manager.getCSRFHeader(), ...headers,
});

const handleSuccess = (dispatch, actions, name, ...args) => ({ data }) => dispatch(
  invokeAction(actions, name, data, ...args),
);

const handleError = (dispatch, actions, name, ...args) => (error) => {
  if (axios.isCancel(error)) {
    return null;
  }
  return dispatch(invokeAction(actions, name, error, ...args));
};

/**
 * Executes a GET request to an list REST API endpoint. The `receiveList` should
 * accept an object that contains a list of results.
 *
 * @param {String} url     URL of the endpoint
 * @param {Object} actions Redux Actions object
 * @param {Object} headers Custom HTTP Headers
 * @return {Function}
 */
export const requestList = (url, actions = {}, headers = {}) => (dispatch) => {
  dispatch(invokeAction(actions, 'requestList'));

  const cancelToken = manager.cancelAxiosAndGetNextToken(url);

  return axios.get(url, {
    cancelToken,
    headers: constructHeaders(headers),
  }).then(
    handleSuccess(dispatch, actions, 'receiveList'),
    handleError(dispatch, actions, 'receiveList'),
  );
};

/**
 * Executes a GET request to a details REST API endpoint. The `receiveDetails` should
 * accept a single resource object.
 *
 * @param {String} alias   Identifier alias of the resource
 * @param {String} url     URL of the endpoint
 * @param {Object} actions Redux Actions object
 * @param {Object} headers Custom HTTP Headers
 * @return {Function}
 */
export const requestDetails = (alias, url, actions, headers = {}) => (dispatch) => {
  dispatch(invokeAction(actions, 'requestDetails'));

  const cancelToken = manager.cancelAxiosAndGetNextToken(url);

  return axios.get(url, {
    cancelToken,
    headers: constructHeaders(headers),
  }).then(
    handleSuccess(dispatch, actions, 'receiveDetails', alias),
    handleError(dispatch, actions, 'receiveDetails', alias),
  );
};


/**
 * Executes a POST or PUT request to a details REST API endpoint with resource attributes.
 * The `receiveDetails` should accept a single resource object.
 *
 * @param {String} alias     Identifier alias of the resource
 * @param {Object} data      Resource attributes that should be stored
 * @param {String} url       URL of the endpoint
 * @param {Object} actions   Redux Actions object
 * @param {Boolean} creating Should the resource be created or edited
 * @param {Object} headers   Custom HTTP Headers
 * @return {Function}
 */
export const requestStore = (alias, data, url, actions, creating = false, headers = {}) => (dispatch) => {
  if (alias) {
    dispatch(invokeAction(actions, 'requestStore', alias));
  }

  const executor = creating ? axios.post : axios.put;
  const cancelToken = manager.cancelAxiosAndGetNextToken(url);

  return executor(url, {
    cancelToken,
    headers: constructHeaders(headers),
  }).then(
    handleSuccess(dispatch, actions, 'receiveStore', alias),
    (error) => {
      if (axios.isCancel(error)) {
        return null;
      }

      if (alias) {
        dispatch(invokeAction(actions, 'receiveStore', error, alias));
      }

      throw error;
    },
  );
};

/**
 * Executes a PATCH request to a details REST API endpoint with resource attributes.
 * The `receiveDetails` should accept a single resource object.
 *
 * @param {String} alias   Identifier alias of the resource
 * @param {Object} data    Resource attributes that should be stored
 * @param {String} url     URL of the endpoint
 * @param {Object} actions Redux Actions object
 * @param {Object} headers Custom HTTP Headers
 * @return {Function}
 */
export const requestPatch = (alias, url, data, actions, headers = {}) => (dispatch) => {
  dispatch(invokeAction(actions, 'requestDetails', alias));

  const cancelToken = manager.cancelAxiosAndGetNextToken(url);

  return axios.patch(url, {
    cancelToken,
    headers: constructHeaders(headers),
  }).then(
    handleSuccess(dispatch, actions, 'receiveDetails', alias),
    handleError(dispatch, actions, 'receiveDetails', alias),
  );
};

/**
 * Executes a DELETE request to a details REST API endpoint.
 * The `receiveDelete` should accept a single resource object. Resource object could be
 * empty if the server returns a 204 status code.
 *
 * @param {String} alias   Identifier alias of the resource
 * @param {String} url     URL of the endpoint
 * @param {Object} actions Redux Actions object
 * @param {Object} headers Custom HTTP Headers
 * @return {Function}
 */
export const requestDelete = (alias, url, actions, headers = {}) => (dispatch) => {
  dispatch(invokeAction(actions, 'requestDelete', alias));

  const cancelToken = manager.cancelAxiosAndGetNextToken(url);

  return axios.delete(url, {
    cancelToken,
    headers: constructHeaders(headers),
  }).then(
    handleSuccess(dispatch, actions, 'receiveDelete', alias),
    (error) => {
      if (axios.isCancel(error)) {
        return null;
      }

      if (alias) {
        dispatch(invokeAction(actions, 'receiveDelete', error, alias));
      }

      throw error;
    },
  );
};
