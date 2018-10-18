import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FieldError from '../../src/forms/FieldError';

describe('<FieldError/>', () => {
  context('Testing field error component renders', () => {
    let fieldError;
    const text = 'This is text';

    before(() => {
      fieldError = shallow(<FieldError>{text}</FieldError>);
    });

    it('has class name "text-danger"', () => expect(fieldError.find('strong').hasClass('text-danger')).to.be.true);
    it('dispalys the correct error text', () => expect(fieldError.find('span').text()).to.equal(text));
    it('uses a font awesome icon with a warning sign', () => expect(
      fieldError.find('FontAwesome').props().name,
    ).to.equal('warning'));
  });
});
