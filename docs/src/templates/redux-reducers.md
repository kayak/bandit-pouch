---
id: "redux-reducers"
title: "Reducers"
---
This module exposes a couple of utility function that can help out in manipulating the state
in the reducers.

#### Available methods:

* *setInState* - Sets a deep value in the redux state
* *omitInState* - Omits a deep value in the redux state
* *mergeInState* - Merge an object at a deep path in the redux state
* *assignInState* - Assigns values from an object at a deep path in the redux state

#### Example Usage

Image a simple a User management reducer where you need to perform login, update and logout operations

```javascript
import * as states from 'bandit-pouch/redux/states';
import {
  setInState,
  omitInState,
  mergeInState,
  assignInState,
} from 'bandit-pouch';

const initialState = {
  ...states.initial(),
  user: {
    username: 'foo',
    password: 'secret',
    permissions: {
      read: true,
      write: false,
    }
  }
}

export function myReducer(state = states.initial(), action) {
  switch (action.type) {
  case 'LOGGED_IN':
    // Use the `setInState` to add a logged in user to the state.
    // This method would override all user values from the previous state 
    return setInState(state, 'user', action.user);

  case 'CHANGE_WRITE_PERMISSION':
    // You can also `setInState` to set a deep nested value by using a key as an object path   
    return setInState(state, 'user.write', action.value);

  case 'UPDATE_USER':
    // To partially update the state object you can use the `mergeInState` function
    return mergeInState(state, 'user', action.user);

  case 'LOGOUT':
    // You can delete the value from the store using the `omitInState` function 
    return omitInState(state, 'user');
  
  default:
    return state;
  }
}
```
