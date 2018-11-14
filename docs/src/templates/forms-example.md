---
id: "forms-example"
title: "React form"
---
This library also comes with common form fields that can be used in the [redux-form](https://redux-form.com).

#### Example code for the form above
```javascript
import React  from 'react';
import { Form, Field, reduxForm } from 'redux-form';
import { Col, Row } from 'react-bootstrap';

import {
  CheckboxField,
  PasswordField,
  RangeField,
  SelectField,
  SpinnerField,
  SubmitResetRow,
  TextAreaField,
  TextField,
  Validators,
} from 'bandit-pouch';

const FormFields = () => (
  <section>
    <Row>
      <Col xs={4}>
        <Field
          autofocus
          component={TextField}
          name="text"
          label="Text field label"
          placeholder="Enter some text"
          validate={[Validators.required(), Validators.min(6)]}
        />
      </Col>
      <Col xs={4}>
        <Field
          component={PasswordField}
          name="password"
          label="Password field label"
          placeholder="Enter your password"
          validate={[
            Validators.required(),
            Validators.regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/, 'Password should contain at least 1 '
              + 'lower case  character, upper case character and a digit'),
            Validators.min(6),
            Validators.max(12),
          ]}
        />
      </Col>
      <Col xs={4}>
        <Field
          component={SelectField}
          name="select"
          label="Select field label"
          placeholder="Select a value"
          validate={[Validators.required(), Validators.containing(['foo'])]}
          options={[{
            value: 'foo', label: 'Foo',
          }, {
            value: 'bar', label: 'Bar',
          }]}
        />
      </Col>
    </Row>
    <Row>
      <Col xs={4}>
        <Field
          component={CheckboxField}
          name="checkbox"
          label="Tick me"
        />
      </Col>
      <Col xs={4}>
        <Field
          component={SpinnerField}
          name="number"
          label="Number spinner"
          min={2}
          max={6}
          validate={[Validators.between(2, 6)]}
        />
      </Col>
      <Col xs={4}>
        <Field
          component={RangeField}
          name="range"
          label="Range"
          min={0}
          max={20}
          validate={[Validators.between(0, 20)]}
        />
      </Col>
    </Row>
    <Row>
      <Col xs={3}>
        <Field
          component={MonthPickerField}
          name="month"
          label="Year month picker"
          help="Select the starting month of your journey"
        />
      </Col>
      <Col xs={9}>
        <Field
          component={TextAreaField}
          name="textarea"
          label="Text area field label"
          placeholder="Write me a story"
          validate={[Validators.between(10, 200)]}
        />
      </Col>
    </Row>
  </section>
);

const ExampleForm = ({
  handleSubmit, pristine, submitting, error, reset,
}) => (
  <Form onSubmit={handleSubmit}>
    <FormFields />
    <SubmitResetRow
      {...{
        pristine,
        submitting,
        error,
        reset,
      }}
    />
  </Form>
);

export default reduxForm({
  form: 'example',
  anyTouched: false,
})(ExampleForm);
```
