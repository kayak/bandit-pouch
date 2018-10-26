import {
  CheckboxField,
  KeyValueFieldArray,
  PasswordField,
  RangeField,
  SelectField,
  SpinnerField,
  SubmitResetRow,
  TextAreaField,
  TextField,
  Validators,
  VerticalFieldArray,
} from 'bandit-pouch';
import React from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import {
  Field,
  FieldArray,
  Form,
  reduxForm,
} from 'redux-form';

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
      <Col xs={12}>
        <Field
          component={TextAreaField}
          name="textarea"
          label="Text area field label"
          placeholder="Write me a story"
          validate={[Validators.between(10, 200)]}
        />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <FieldArray
          component={KeyValueFieldArray}
          name="keyvaluearray"
          label="Key value field array label"
          keyField={
              <Field
                component={TextField}
                name="metric"
                placeholder="Metric..."
                validate={[Validators.required()]}
              />
          }
          valueField={
              <Field
                component={TextField}
                name="description"
                placeholder="Description..."
                validate={[Validators.required()]}
              />
          }
          validate={[Validators.required()]}
          help="To add key-value items to your forms."
          emptyMessage={<i className="text-muted">At least one key-value item is required.</i>}
        />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <FieldArray
          component={VerticalFieldArray}
          name="verticalrray"
          label="Vertical array field title"
          innerComponent={({field}) => (
            <Field
              component={TextField}
              name={`${field}.description`}
              placeholder="Description..."
              validate={[Validators.required()]}
            />
          )}
          validate={[Validators.required()]}
          help="To add items to your forms."
          emptyMessage={<i className="text-muted">At least one item is required.</i>}
          sortable={true}
          duplicable={true}
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
