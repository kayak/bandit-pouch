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

    it('renders feedback element', () => expect(fieldError.exists('Feedback')).toEqual(true));
    it('renders error text', () => expect(fieldError.find('span').text()).toEqual(text));
    it('renders feedback element with invalid state', () => expect(
      fieldError.find('Feedback').prop('type'),
    ).toEqual('invalid'));
    it('uses a font awesome icon with a warning sign', () => expect(
      fieldError.find('FontAwesomeIcon').prop('icon'),
    ).toEqual('exclamation-circle'));
  });
});
