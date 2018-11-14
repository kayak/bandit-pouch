import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import FontAwesome from 'react-fontawesome';
import ErrorPage from '../../src/ui/ErrorPage';
import PageNotFound from '../../src/ui/PageNotFound';
import { CenteredLoader } from '../../src/ui/Loaders';
import LoadingWrapper from '../../src/ui/LoadingWrapper';

describe('LoadingWrapper', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<LoadingWrapper
      component={() => (<p className="component">Component</p>)}
    />);
  });

  it('renders the body component when state is loaded', () => {
    expect(wrapper.children()).to.have.lengthOf(1);
    expect(wrapper.find('.component').exists()).to.equal(true);
    expect(wrapper.find('.component').text()).to.equal('Component');
  });

  it('renders the loading component when state is loading', () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.children()).to.have.lengthOf(1);
    expect(wrapper.find(CenteredLoader).exists()).to.equal(true);
  });

  it('renders the error page when there is an error', () => {
    wrapper.setProps({ error: 'Error occurred' });
    expect(wrapper.children()).to.have.lengthOf(1);
    expect(wrapper.find(ErrorPage).exists()).to.equal(true);
    expect(wrapper.find(FontAwesome).exists()).to.equal(false);
    expect(wrapper.find('.error-page-status').exists()).to.equal(false);
    expect(wrapper.find('.error-page-message').text()).to.equal('Error occurred');
  });

  it('renders a customized error when there is an error', () => {
    wrapper.setProps({
      error: { message: 'Error', status: 403, icon: 'ban' },
    });
    expect(wrapper.children()).to.have.lengthOf(1);
    expect(wrapper.find(ErrorPage).exists()).to.equal(true);
    expect(wrapper.find(FontAwesome).prop('name')).to.equal('ban');
    expect(wrapper.find('.error-page-status').text()).to.equal('403');
    expect(wrapper.find('.error-page-message').text()).to.equal('Error');
  });

  it('renders a custom error component when there is an error', () => {
    wrapper.setProps({
      error: () => (<span>Error message</span>),
    });
    expect(wrapper.children()).to.have.lengthOf(1);
    expect(wrapper.find(ErrorPage).exists()).to.equal(false);
    expect(wrapper.contains(<span>Error message</span>)).to.equal(true);
  });

  it('renders the not found error page when found is set to false', () => {
    wrapper.setProps({ found: false });
    expect(wrapper.children()).to.have.lengthOf(1);
    expect(wrapper.find(PageNotFound).exists()).to.equal(true);
    expect(wrapper.find(FontAwesome).prop('name')).to.equal('frown-o');
    expect(wrapper.find('.error-page-status').text()).to.equal('404');
    expect(wrapper.find('.error-page-message').text()).to.equal('The page you requested was not found.');
  });
});
