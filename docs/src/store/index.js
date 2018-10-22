import { createStore, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
  form: formReducer,
});

export default createStore(reducer, {}, compose(
  window.devToolsExtension && process.env.NODE_ENV !== 'production' ? window.devToolsExtension() : f => f,
));
