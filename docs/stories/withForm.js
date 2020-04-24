import _ from 'lodash';
import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

const WrapperForm = ({ children, ...formProps }) => (
  <Form
    onSubmit={() => null}
    mutators={{
      ...arrayMutators,
    }}
    {...formProps}
  >{({values}) => (
      <div>
    <div>
      {children}
    </div>
    <div>
      <strong>Form state:</strong>
      <pre>{
        JSON.stringify(values, null, 2)
        || 'Change field to see form state. Field name is formField.'
      }</pre>
    </div>
  </div>
  )}</Form>
);

export default (storyFn, context) => (
    <WrapperForm {..._.get(context, 'parameters', {})}>{storyFn()}</WrapperForm>
);
