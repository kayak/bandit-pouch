import React from 'react';
import { connect, Provider } from 'react-redux';

import store from './store';
import { Form as ReduxForm, getFormValues, reduxForm } from 'redux-form'; // theme css file

const WrapperForm = ({ children, formValues }) => (
  <div>
    <div>
      <ReduxForm onSubmit={() => null}>{children}</ReduxForm>
    </div>
    <div>
      <strong>Redux-form state:</strong>
      <pre>{
        JSON.stringify(formValues, null, 2)
        || 'Change field to see redux state. Field name is formField.'
      }</pre>
    </div>
  </div>
);

export const Form = reduxForm({
  form: 'form',
  anyTouched: false,
})(
  connect(state => ({
    formValues: getFormValues('form')(state),
  }))(WrapperForm),
);

export const withStore = storyFn => (
  <Provider store={store}>
    {storyFn()}
  </Provider>
);

export default storyFn => (
  <Provider store={store}>
    <Form>{storyFn()}</Form>
  </Provider>
);
