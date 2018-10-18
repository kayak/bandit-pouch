import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import FormField from '../../src/forms/FormField';

describe('<FormField/>', () => {
  context('Testing form field component renders', () => {
    let field;

    before(() => {
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

    it('has form-group element', () => expect(field.find('.form-group').exists()).to.be.true);
    it('has mock field', () => expect(field.find('.form-group p').text()).to.be.equal('This is an mock field'));
    it('has label element', () => expect(field.find('.control-label').exists()).to.be.true);
    it('has label text', () => expect(field.find('.control-label').text()).to.be.equal('label'));
    it('has help element', () => expect(field.find('.help-block').exists()).to.be.true);
    it('has help text', () => expect(field.find('.help-block').text()).to.be.equal('help'));
    it('has no error element', () => expect(field.find('.validation-error').exists()).to.be.false);
  });

  context('Testing form field component renders without params', () => {
    let field;

    before(() => {
      field = mount(
        <FormField id="test">
          <p>This is an mock field</p>
        </FormField>,
      );
    });

    it('has form-group element', () => expect(field.find('.form-group').exists()).to.be.true);
    it('has mock field', () => expect(field.find('.form-group p').text()).to.be.equal('This is an mock field'));
    it('has label element', () => expect(field.find('.control-label').exists()).to.be.false);
    it('has help element', () => expect(field.find('.help-block').exists()).to.be.false);
    it('has no error element', () => expect(field.find('.validation-error').exists()).to.be.false);
  });

  context('Form field component should show errors only when it\'s touched', () => {
    let untouched;
    let touched;

    before(() => {
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

    it('touched has error element', () => expect(touched.find('.validation-error').exists()).to.be.true);
    it('touched has error text', () => expect(touched.find('.validation-error').text()).to.be.equal('Field error'));
    it('untouched has no error element', () => expect(untouched.find('.validation-error').exists()).to.be.false);
  });
});
