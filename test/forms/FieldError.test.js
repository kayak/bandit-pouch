import React from 'react';
import { shallow } from 'enzyme';
import FieldError from '../../src/forms/FieldError';

describe('<FieldError/>', () => {
  describe('Testing field error component renders', () => {
    let fieldError;
    const text = 'This is text';

    beforeAll(() => {
      fieldError = shallow(<FieldError>{text}</FieldError>);
    });

    it('has class name "text-danger"', () => expect(fieldError.find('strong').hasClass('text-danger')).toEqual(true));
    it('dispalys the correct error text', () => expect(fieldError.find('span').text()).toEqual(text));
    it('uses a font awesome icon with a warning sign', () => expect(
      fieldError.find('FontAwesome').props().name,
    ).toEqual('warning'));
  });
});
