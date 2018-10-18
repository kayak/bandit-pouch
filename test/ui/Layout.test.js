import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Col, Row } from 'react-bootstrap';

import {
  Page,
  Left,
  Right,
  Content,
  TopPanel,
  HorizontalSplit,
} from '../../src/ui/Layout';

describe('Layout', () => {
  describe('<Page />', () => {
    let wrapper;

    before(() => {
      wrapper = shallow(
        <Page title="Page title">
          <h1>Hello tests</h1>
        </Page>,
      );
    });

    it('should render document title', () => expect(document.title).to.be.equal('Page title'));
    it('should contain headline', () => expect(
      wrapper.contains(<h1>Hello tests</h1>),
    ).to.equal(true));
  });

  describe('<TopPanel />', () => {
    let wrapper;

    before(() => {
      wrapper = shallow(
        <TopPanel className="foo">
          <h1>Hello tests</h1>
        </TopPanel>,
      );
    });

    it('should contain children', () => expect(
      wrapper.contains(<h1>Hello tests</h1>),
    ).to.equal(true));
    it('should have class name', () => expect(
      wrapper.hasClass('page-layout-toppanel'),
    ).to.equal(true));
    it('should have foo class name', () => expect(
      wrapper.hasClass('foo'),
    ).to.equal(true));
  });

  describe('<HorizontalSplit />', () => {
    let wrapper;

    before(() => {
      wrapper = shallow(
        <HorizontalSplit className="foo">
          <h1>Hello tests</h1>
        </HorizontalSplit>,
      );
    });

    it('should contain children', () => expect(
      wrapper.contains(<h1>Hello tests</h1>),
    ).to.equal(true));
    it('should contain Row', () => expect(
      wrapper.find(Row).exists(),
    ).to.equal(true));
    it('should have original class name', () => expect(
      wrapper.hasClass('page-layout-horizontalsplit'),
    ).to.equal(true));
    it('should have foo class name', () => expect(
      wrapper.hasClass('foo'),
    ).to.equal(true));
  });

  describe('<Content />', () => {
    let wrapper;

    before(() => {
      wrapper = shallow(
        <Content className="foo">
          <h1>Hello tests</h1>
        </Content>,
      );
    });

    it('should contain children', () => expect(
      wrapper.contains(<h1>Hello tests</h1>),
    ).to.equal(true));
    it('should have original class name', () => expect(
      wrapper.hasClass('page-layout-content'),
    ).to.equal(true));
    it('should have foo class name', () => expect(
      wrapper.hasClass('foo'),
    ).to.equal(true));
  });

  describe('<Left />', () => {
    let wrapper;

    before(() => {
      wrapper = shallow(
        <Left className="foo" contentWidthSm={6} contentWidthXs={10}>
          <h1>Hello tests</h1>
        </Left>,
      );
    });

    it('should contain children', () => expect(
      wrapper.contains(<h1>Hello tests</h1>),
    ).to.equal(true));
    it('should contain Col', () => expect(
      wrapper.find(Col).exists(),
    ).to.equal(true));
    it('Col should have small width set', () => expect(
      wrapper.find(Col).prop('xs'),
    ).to.equal(2));
    it('Col should have medium width set', () => expect(
      wrapper.find(Col).prop('md'),
    ).to.equal(6));
    it('should have original class name', () => expect(
      wrapper.hasClass('page-layout-horizontalsplit-left'),
    ).to.equal(true));
    it('should have foo class name', () => expect(
      wrapper.hasClass('foo'),
    ).to.equal(true));
  });

  describe('<Right />', () => {
    let wrapper;

    before(() => {
      wrapper = shallow(
        <Right className="foo" contentWidthSm={4} contentWidthXs={2}>
          <h1>Hello tests</h1>
        </Right>,
      );
    });

    it('should contain children', () => expect(
      wrapper.contains(<h1>Hello tests</h1>),
    ).to.equal(true));
    it('should contain Col', () => expect(
      wrapper.find(Col).exists(),
    ).to.equal(true));
    it('Col should have small width set', () => expect(
      wrapper.find(Col).prop('xs'),
    ).to.equal(2));
    it('Col should have medium width set', () => expect(
      wrapper.find(Col).prop('md'),
    ).to.equal(4));
    it('should have original class name', () => expect(
      wrapper.hasClass('page-layout-horizontalsplit-right'),
    ).to.equal(true));
    it('should have foo class name', () => expect(
      wrapper.hasClass('foo'),
    ).to.equal(true));
  });
});
