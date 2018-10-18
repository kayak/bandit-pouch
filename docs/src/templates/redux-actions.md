---
id: 'redux-actions'
title: 'Actions'
---
This module contains helper functions for building redux-actions Actions. The preferred way to do this is to use the
following functions:
  - createActionNoArgs
  - createActionWithPayload
  - createActionWithMeta
  - createActionWithPayloadAndMeta

These functions restrict the signatures of the Actions to have zero to many meta arguments and zero or one payload
arguments. Meta arguments are used to identify the data that is being manipulated in the redux store, and the
payload argument is incoming data that is to be reduced.

#### Example Usage
```javascript
import {
  createActionNoArgs,
  createActionWithMeta,
  createActionWithPayload,
  createActionWithPayloadAndMeta,
} from 'bandit-pouch';


export default {
  // No meta or payload
  requestList: createActionNoArgs('category.list@request'),

  // No meta, payload contains an array of categories received from the endpoint
  receiveList: createActionWithPayload('category.list@receive'),

  // Meta identifies the category to store by alias
  requestStore: createActionWithMeta('category.store@request', ['alias']),

  // Meta identifies the category to store by alias, payload contains the just-stored category details
  receiveStore: createActionWithPayloadAndMeta('category.store@receive', ['alias']),
}
```

Actions are functions which create objects which are dispatched via redux and reduced into the store by reducers.

#### Example Usage
```javascript
// (Actions) Create an action
action = createActionWithPayloadAndMeta('database.tables.columns@receive', ['alias', 'schema', 'table']);

// (Component) Dispatch an action
dispatch(action({ (payload) }, 'myAlias', 'mySchema', 'myTable');

// (Reducers) Handle the dispatched action via a Reducer to reduce the new payload into the store
[action]: (state, {error, payload, meta: {alias, schema, table}}) =>
```
