import React from 'react';
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

    beforeEach(() => {
      wrapper = shallow(
        <Page title="Page title">
          <h1>Hello tests</h1>
        </Page>,
      );
    });

    it('should render document title', () => expect(document.title).toEqual('Page title'));
    it('should contain headline', () => expect(
      wrapper.contains(<h1>Hello tests</h1>),
    ).toEqual(true));
  });

  describe('<TopPanel />', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <TopPanel className="foo">
          <h1>Hello tests</h1>
        </TopPanel>,
      );
    });

    it('should contain children', () => expect(
      wrapper.contains(<h1>Hello tests</h1>),
    ).toEqual(true));
    it('should have class name', () => expect(
      wrapper.hasClass('page-layout-toppanel'),
    ).toEqual(true));
    it('should have foo class name', () => expect(
      wrapper.hasClass('foo'),
    ).toEqual(true));
  });

  describe('<HorizontalSplit />', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <HorizontalSplit className="foo">
          <h1>Hello tests</h1>
        </HorizontalSplit>,
      );
    });

    it('should contain children', () => expect(
      wrapper.contains(<h1>Hello tests</h1>),
    ).toEqual(true));
    it('should contain Row', () => expect(
      wrapper.find(Row).exists(),
    ).toEqual(true));
    it('should have original class name', () => expect(
      wrapper.hasClass('page-layout-horizontalsplit'),
    ).toEqual(true));
    it('should have foo class name', () => expect(
      wrapper.hasClass('foo'),
    ).toEqual(true));
  });

  describe('<Content />', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Content className="foo">
          <h1>Hello tests</h1>
        </Content>,
      );
    });

    it('should contain children', () => expect(
      wrapper.contains(<h1>Hello tests</h1>),
    ).toEqual(true));
    it('should have original class name', () => expect(
      wrapper.hasClass('page-layout-content'),
    ).toEqual(true));
    it('should have foo class name', () => expect(
      wrapper.hasClass('foo'),
    ).toEqual(true));
  });

  describe('<Left />', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Left className="foo" contentWidthSm={6} contentWidthXs={10}>
          <h1>Hello tests</h1>
        </Left>,
      );
    });

    it('should contain children', () => expect(
      wrapper.contains(<h1>Hello tests</h1>),
    ).toEqual(true));
    it('should contain Col', () => expect(
      wrapper.find(Col).exists(),
    ).toEqual(true));
    it('Col should have small width set', () => expect(
      wrapper.find(Col).prop('xs'),
    ).toEqual(2));
    it('Col should have medium width set', () => expect(
      wrapper.find(Col).prop('md'),
    ).toEqual(6));
    it('should have original class name', () => expect(
      wrapper.hasClass('page-layout-horizontalsplit-left'),
    ).toEqual(true));
    it('should have foo class name', () => expect(
      wrapper.hasClass('foo'),
    ).toEqual(true));
  });

  describe('<Right />', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <Right className="foo" contentWidthSm={4} contentWidthXs={2}>
          <h1>Hello tests</h1>
        </Right>,
      );
    });

    it('should contain children', () => expect(
      wrapper.contains(<h1>Hello tests</h1>),
    ).toEqual(true));
    it('should contain Col', () => expect(
      wrapper.find(Col).exists(),
    ).toEqual(true));
    it('Col should have small width set', () => expect(
      wrapper.find(Col).prop('xs'),
    ).toEqual(2));
    it('Col should have medium width set', () => expect(
      wrapper.find(Col).prop('md'),
    ).toEqual(4));
    it('should have original class name', () => expect(
      wrapper.hasClass('page-layout-horizontalsplit-right'),
    ).toEqual(true));
    it('should have foo class name', () => expect(
      wrapper.hasClass('foo'),
    ).toEqual(true));
  });
});
