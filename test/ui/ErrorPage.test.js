import React from 'react';
import { mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ErrorPage from '../../src/ui/ErrorPage';
import PageNotFound from '../../src/ui/PageNotFound';

describe('<ErrorPage />', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(
      <ErrorPage className="text-danger" icon="exclamation" status="500" message="Error message" />,
    );
  });

  it('should contain status code', () => expect(
    wrapper.find('.error-page-status').text(),
  ).toEqual('500'));
  it('should contain error title', () => expect(
    wrapper.find('.error-page-message').text(),
  ).toEqual('Error message'));
  it('should contain icon element', () => expect(
    wrapper.find(FontAwesomeIcon).exists(),
  ).toEqual(true));
  it('should contain exclamation icon', () => expect(
    wrapper.find(FontAwesomeIcon).prop('icon'),
  ).toEqual('exclamation'));
  it('should have extra class name', () => expect(
    wrapper.hasClass('text-danger'),
  ).toEqual(true));

  it('should render with a custom message component', () => {
    const ErrorMessage = () => (<span>Error Message</span>);
    expect(mount(
      <ErrorPage message={<ErrorMessage />} />,
    ).contains(<span>Error Message</span>)).toEqual(true);
  });

  it('should render with a custom message node', () => {
    expect(mount(
      <ErrorPage message={<span>Error Message</span>} />,
    ).contains(<span>Error Message</span>)).toEqual(true);
  });
});

describe('<PageNotFound />', () => {
  let wrapper;

  describe('with default props', () => {
    beforeAll(() => {
      wrapper = mount(
        <PageNotFound />,
      );
    });

    it('should contain error title', () => expect(
      wrapper.find('.error-page-message').text(),
    ).toEqual('The page you requested was not found.'));
    it('should contain status code', () => expect(
      wrapper.find('.error-page-status').text(),
    ).toEqual('404'));
    it('should contain frown icon', () => expect(
      wrapper.find(FontAwesomeIcon).prop('icon'),
    ).toEqual(['far', 'frown']));
  });

  describe('with default props', () => {
    beforeAll(() => {
      wrapper = mount(
        <PageNotFound status={500} icon="exclamation-circle" message="Not Found" className="not-found" />,
      );
    });

    it('should contain error title', () => expect(
      wrapper.find('.error-page-message').text(),
    ).toEqual('Not Found'));
    it('should contain status code', () => expect(
      wrapper.find('.error-page-status').text(),
    ).toEqual('404'));
    it('should have custom class name', () => expect(
      wrapper.hasClass('not-found'),
    ).toEqual(true));
    it('should contain frown icon', () => expect(
      wrapper.find(FontAwesomeIcon).prop('icon'),
    ).toEqual('exclamation-circle'));
  });
});
