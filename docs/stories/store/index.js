import { combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
  form: formReducer,
});

const middleware = [];
if (typeof window !== 'undefined') {
  const { devToolsExtension } = window;
  if (devToolsExtension && process.env.NODE_ENV !== 'production') {
    middleware.push(devToolsExtension());
  }
}

export default createStore(reducer, {}, compose(...middleware));
