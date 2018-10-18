---
id: "redux-requests"
title: "Requests"
---
You can use this module to execute AJAX requests against REST API endpoints. It follows common development
patterns that were frequently used in our projects. These methods heavily depend on how Redux Action handlers
are constructed and used. You can find more in our example section where combine all our modules to
create a reducer and actions that depend on a remote API. 


#### Available methods:

* *requestList* - Executes a GET request against an list REST API endpoint
* *requestDetails* - Executes a GET request against a details REST API endpoint
* *requestStore* - Executes a POST or PUT request against a details REST API endpoint with resource attributes
* *requestPatch* - Executes a PATCH request against a details REST API endpoint with resource attributes
* *requestDelete* - Executes a DELETE request against a REST API endpoint

#### Example

Lets define common actions object that would be used to handle the Redux state.
##### actions.js

```javascript
import {
  createActionNoArgs,
  createActionWithMeta,
  createActionWithPayload,
  createActionWithPayloadAndMeta,
} from 'bandit-pouch';

export default {
  /* Actions used by the `requestList` function */
  requestList: createActionNoArgs('resource.list@request'),
  receiveList: createActionNoArgs('resource.list@receive'),
  
  /* Actions used by the `requestDetails` and `requestPatch` functions */
  requestDetails: createActionWithMeta('resource.details@request', ['alias']),
  receiveDetails: createActionWithPayloadAndMeta('resource.details@receive', ['alias']),
  
  /* Actions used by the `requestStore` function */
  requestStore: createActionWithMeta('resource.store@request', ['alias']),
  receiveStore: createActionWithPayloadAndMeta('resource.store@receive', ['alias']),
  
  /* Actions used by the `requestDelete` function */
  requestDelete: createActionWithMeta('resource.delete@request', ['alias']),
  receiveDelete: createActionWithPayloadAndMeta('resource.delete@receive', ['alias']),
}
````

Once the actions are defined we can continue writing our dispatcher functions that would
execute the REST API and invoke defined Reducer actions.
##### dispatcher.js

```javascript
import {
  requestList,
  requestStore,
  requestPatch,
  requestDelete,
  requestDetails,
} from 'bandit-pouch/redux/requests';
import Actions from './actions'

export const getResources = dispatch => () => dispatch(
  requestList('/api/resources', Actions),
);

export const getResource = dispatch => id => dispatch(
  requestDetails(id, `/api/resources/${id}`, Actions),
);

export const createResource = dispatch => payload => dispatch(
  requestStore(null, payload, `/api/resources`, Actions, true),
);

export const editResource = dispatch => (id, payload) => dispatch(
  requestStore(id, payload, `/api/resources/${id}`, Actions),
);

export const patchResource = dispatch => (id, payload) => dispatch(
  requestPatch(id, payload, `/api/resources/${id}`, Actions),
);

export const deleteResource = dispatch => id => dispatch(
  requestDelete(id, `/api/resources/${id}`, Actions),
);
```

Now let's define a simple Reducer that handles the Actions that are dispatched by our requests.
We are going to use [redux-actions](https://github.com/redux-utilities/redux-actions) library to
reduce the amount of boilerplate code.
##### reducer.js

```javascript
import _ from 'lodash';
import { handleActions } from 'redux-actions';
import * as states from 'bandit-pouch/redux/states';
import {
    assignInState,
    mergeInState,
    omitInState,
    setInState,
} from 'bandit-pouch/redux/reducers';
import Actions from './actions'

const initialState = {
  resources: {
    ...states.initial(),
  },
}

export default handleActions({
  [Actions.requestList]: state => setInState(
    state,
    'resources',
    states.loading(),
  ),
  [Actions.receiveList]: (state, { error, payload }) => {
    if (error) {
      return mergeInState(state, 'resources', states.error(payload))
    }
    // creates an object from the list of resource where the keys
    // are resource unique identifiers
    const resources = _.reduce(payload, (obj, resource) => {
      return { obj, [resource.id]: resource };
    }, state.resources);

    return mergeInState(state, 'resources', states.found(resources));
  },
  
  [Actions.requestDetails]: (state, { payload, meta: { alias } }) => assignInState(
    state,
    `resources.${alias}`,
    states.loading()
  ),
  
  [Actions.receiveDetails]: (state, { error, payload, meta: { alias } }) => assignInState(
    state,
    `resources.${alias}`,
    error ? states.error(payload) : payload,
  ),
  
  [Actions.requestStore]: (state, { payload, meta: { alias } }) => assignInState(
    state,
    `resources.${alias}`,
    states.storing(),
  ),
  
  [Actions.receiveStore]: (state, { error, payload, meta: { alias } }) => {
    if (error) {
      return assignInState(state, `resources.${alias}`, states.storeError(payload))
    }
    return setInState(state, `resources.${alias}`, states.stored(payload));
  },
  
  [Actions.requestDelete]: (state, { payload, meta: { alias } }) => assignInState(
    state,
    `resources.${alias}`,
    states.deleting(),
  ),
  
  [Actions.receiveDelete]: (state, { error, meta: { alias } }) => {
    if (error) {
      return assignInState(state, `resources.${alias}`, {
        error: payload,
        deleting: false,
      });
    }
    return omitInState(state, `resources.${alias}`);
  },
   
}, initialState)
````
