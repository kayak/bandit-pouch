import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import FontAwesome from 'react-fontawesome';

import ErrorPage from '../../src/ui/ErrorPage';
import PageNotFound from '../../src/ui/PageNotFound';

describe('<ErrorPage />', () => {
  let wrapper;

  before(() => {
    wrapper = mount(
      <ErrorPage className="text-danger" icon="exclamation" status="500" message="Error message" />,
    );
  });

  it('should contain status code', () => expect(
    wrapper.find('.error-page-status').text(),
  ).to.equal('500'));
  it('should contain error title', () => expect(
    wrapper.find('.error-page-message').text(),
  ).to.equal('Error message'));
  it('should contain icon element', () => expect(
    wrapper.find(FontAwesome).exists(),
  ).to.equal(true));
  it('should contain exclamation icon', () => expect(
    wrapper.find(FontAwesome).prop('name'),
  ).to.equal('exclamation'));
  it('should have extra class name', () => expect(
    wrapper.hasClass('text-danger'),
  ).to.equal(true));

  it('should render with a custom message component', () => {
    const ErrorMessage = () => (<span>Error Message</span>);
    expect(mount(
      <ErrorPage message={<ErrorMessage />} />,
    ).contains(<span>Error Message</span>)).to.equal(true);
  });

  it('should render with a custom message node', () => {
    expect(mount(
      <ErrorPage message={<span>Error Message</span>} />,
    ).contains(<span>Error Message</span>)).to.equal(true);
  });
});

describe('<PageNotFound />', () => {
  let wrapper;

  context('with default props', () => {
    before(() => {
      wrapper = mount(
        <PageNotFound />,
      );
    });

    it('should contain error title', () => expect(
      wrapper.find('.error-page-message').text(),
    ).to.equal('The page you requested was not found.'));
    it('should contain status code', () => expect(
      wrapper.find('.error-page-status').text(),
    ).to.equal('404'));
    it('should contain frown icon', () => expect(
      wrapper.find(FontAwesome).prop('name'),
    ).to.equal('frown-o'));
  });

  context('with default props', () => {
    before(() => {
      wrapper = mount(
        <PageNotFound status={500} icon="warning" message="Not Found" className="not-found" />,
      );
    });

    it('should contain error title', () => expect(
      wrapper.find('.error-page-message').text(),
    ).to.equal('Not Found'));
    it('should contain status code', () => expect(
      wrapper.find('.error-page-status').text(),
    ).to.equal('404'));
    it('should have custom class name', () => expect(
      wrapper.hasClass('not-found'),
    ).to.equal(true));
    it('should contain frown icon', () => expect(
      wrapper.find(FontAwesome).prop('name'),
    ).to.equal('warning'));
  });
});
