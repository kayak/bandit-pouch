import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Abbreviation from '../../src/ui/Abbreviation';

describe('<Abbreviation />', () => {
  it('Should render with a tooltip', () => {
    const wrapper = shallow(<Abbreviation tooltip="Title" label="Label" />);
    expect(wrapper.text()).to.equal('Label');
    expect(wrapper.prop('title')).to.equal('Title');
    expect(wrapper.prop('style')).to.deep.equal({ borderBottom: '1px dotted #777' });
  });

  it('Should render with a white border', () => {
    const wrapper = shallow(<Abbreviation tooltip="Title" label="Label" type="metric" />);
    expect(wrapper.text()).to.equal('Label');
    expect(wrapper.prop('style')).to.deep.equal({ borderBottom: '1px dotted #FFF' });
  });

  it('Should render just a span', () => {
    const wrapper = shallow(<Abbreviation label="Label" />);
    expect(wrapper.html()).to.equal('<span>Label</span>');
  });
});
