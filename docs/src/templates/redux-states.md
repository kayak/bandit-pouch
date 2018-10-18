---
id: "redux-states"
title: "States"
---
These functions are used by reducers to create standard values in the redux store. They represent different states
that the data in the store can be in.

#### Example Usage
```javascript
import * as states from 'bandit-pouch/redux/states';

// Use initial state as a default state in your reducers
export function myReducer(state = states.initial(), action) {
  switch (action.type) {
  
  case 'LOADING':
    // Sets the `loading` property in your state to `true`
    return states.loading(state);
  
  case 'FOUND':
    // Sets the `loading` property in your state to `false`
    return states.found({ ...state, model: action.model });
  
  case 'ERROR':
    // Sets the `loading` property in your state to `false`
    // and adds an error value to your state.
    return { ...state, ...states.deleted() };
  
  case 'SAVING':
    // Sets the `storing` property in your state to `true`
    return { ...state, ...states.storing() };
  
  case 'SAVED':
    // Sets the `storing` property in your state to `false`
    // you can also merge it with your model data from the action
    return states.stored({ ...state, model: action.model });
  
  case 'SAVE_FAILED':
    // Sets the `storing` property in your state to `false`
    // and adds an error value to your state. 
    return { ...state, ...states.storeError(action.error) };
    
  case 'DELETING':
    // Sets the `deleting` property in your state to `true`
    return { ...state, ...states.deleting() };
  
  case 'DELETED':
    // Sets the `deleting` property in your state to `false`
    return { ...state, ...states.deleted() };
  
  case 'REVERTING':
    // Sets the `reverting` property in your state to `false`
    return { ...state, ...states.reverting() };
    
  case 'REVERTED':
    // Sets the `reverting` property in your state to `false`
    return { ...state, ...states.reverted() };
  
  default:
    return state;
  }
}
```
