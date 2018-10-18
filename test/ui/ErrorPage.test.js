import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FontAwesome from 'react-fontawesome';

import ErrorPage from '../../src/ui/ErrorPage';
import PageNotFound from '../../src/ui/PageNotFound';

describe('<ErrorPage />', () => {
  let wrapper;

  before(() => {
    wrapper = shallow(
      <ErrorPage className="text-danger" icon="exclamation">
        <h1>Error</h1>
      </ErrorPage>,
    );
  });

  it('should contain error title', () => expect(
    wrapper.contains(<h1>Error</h1>),
  ).to.equal(true));
  it('should contain icon element', () => expect(
    wrapper.find(FontAwesome).exists(),
  ).to.equal(true));
  it('should contain exclamation icon', () => expect(
    wrapper.find(FontAwesome).prop('name'),
  ).to.equal('exclamation'));
  it('should have original class name', () => expect(
    wrapper.hasClass('error-page'),
  ).to.equal(true));
  it('should have extra class name', () => expect(
    wrapper.hasClass('text-danger'),
  ).to.equal(true));
});

describe('<PageNotFound />', () => {
  let wrapper;

  before(() => {
    wrapper = shallow(
      <PageNotFound />,
    );
  });

  it('should contain error title', () => expect(
    wrapper.contains('Not found'),
  ).to.equal(true));
});
