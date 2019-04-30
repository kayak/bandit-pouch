import React from 'react';
import { mount } from 'enzyme';
import FormField from '../../src/forms/FormField';

describe('<FormField/>', () => {
  describe('Testing form field component renders', () => {
    let field;

    beforeAll(() => {
      field = mount(
        <FormField
          id="test"
          help="help"
          label="label"
          className="my-class"
        >
          <p>This is an mock field</p>
        </FormField>,
      );
    });

    it('has form-group element', () => expect(field.find('.form-group').exists()).toEqual(true));
    it('has mock field', () => expect(field.find('.form-group p').text()).toEqual('This is an mock field'));
    it('has label element', () => expect(field.find('.control-label').exists()).toEqual(true));
    it('has label text', () => expect(field.find('.control-label').text()).toEqual('label'));
    it('has help element', () => expect(field.find('.help-block').exists()).toEqual(true));
    it('has help text', () => expect(field.find('.help-block').text()).toEqual('help'));
    it('has no error element', () => expect(field.find('.validation-error').exists()).toEqual(false));
  });

  describe('Testing form field component renders without params', () => {
    let field;

    beforeAll(() => {
      field = mount(
        <FormField id="test">
          <p>This is an mock field</p>
        </FormField>,
      );
    });

    it('has form-group element', () => expect(field.find('.form-group').exists()).toEqual(true));
    it('has mock field', () => expect(field.find('.form-group p').text()).toEqual('This is an mock field'));
    it('has label element', () => expect(field.find('.control-label').exists()).toEqual(false));
    it('has help element', () => expect(field.find('.help-block').exists()).toEqual(false));
    it('has no error element', () => expect(field.find('.validation-error').exists()).toEqual(false));
  });

  describe('Form field component should show errors only when it\'s touched', () => {
    let untouched;
    let touched;

    beforeAll(() => {
      untouched = mount(
        <FormField id="test" meta={{ error: 'Field error', touched: false }}>
          <p>This is an mock field</p>
        </FormField>,
      );
      touched = mount(
        <FormField id="test" meta={{ error: 'Field error', touched: true }}>
          <p>This is an mock field</p>
        </FormField>,
      );
    });

    it('touched has error element', () => expect(touched.find('.validation-error').exists()).toEqual(true));
    it('touched has error text', () => expect(touched.find('.validation-error').text()).toEqual('Field error'));
    it('untouched has no error element', () => expect(untouched.find('.validation-error').exists()).toEqual(false));
  });
});
