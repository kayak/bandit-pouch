import React from 'react';
import { connect, Provider } from 'react-redux';

import store from './store';
import { Form, getFormValues, reduxForm } from 'redux-form'; // theme css file

const WrapperForm = ({ children, formValues }) => (
  <div>
    <div>
      <Form onSubmit={() => null}>{children}</Form>
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

const ConnectedWrapperForm = reduxForm({
  form: 'form',
  anyTouched: false,
})(
  connect(state => ({
    formValues: getFormValues('form')(state),
  }))(WrapperForm)
);

export default storyFn => (
  <Provider store={store}>
    <ConnectedWrapperForm>{storyFn()}</ConnectedWrapperForm>
  </Provider>
)
