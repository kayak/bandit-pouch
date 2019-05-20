import { mount } from 'enzyme';
import _ from 'lodash';
import React from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';
import DynamicRow from '../../src/ui/DynamicRow';

describe('<DynamicRow/>', () => {
  let dynamicRow;
  const renderCalls = [];
  const items = [
    { width: 6, text: '1' },
    { width: 6, text: '2' },
    { width: 5, text: '3' },
    { width: 5, text: '4' },
    { width: 12, text: '5' },
    { text: '6' },
    { width: 13, text: '7' },
  ];

  beforeAll(() => {
    dynamicRow = mount(
      <DynamicRow
        items={items}
        defaultWidth={3}
        render={(item, itemIndex) => {
          renderCalls.push([item, itemIndex]);
          return <div>{item.text}</div>;
        }}
      />,
    );
  });

  it('should call render once per item with the item and index', () => expect(
    renderCalls,
  ).toEqual(_.zip(items, [0, 1, 2, 3, 4, 5, 6])));

  it('should render one column per item', () => expect(
    dynamicRow.find(Col).length,
  ).toEqual(items.length + 1));

  it('should not allow the sum of column widths to exceed 12', () => {
    const rows = dynamicRow.find(Row);
    expect.assertions(rows.length);

    rows.forEach((row) => {
      const size = _.sum(row.find(Col).map(col => col.prop('sm')));
      expect(size).toBeLessThan(13);
    });
  });

  // This should be one less than the index in items since DynamicRows filters invisible columns
  it('should use the default width when the is no width attribute in item', () => expect(
    dynamicRow.find(Col).at(5).prop('sm'),
  ).toEqual(3));

  // This should be one less than the index in items since DynamicRows filters invisible columns
  it('ignores widths greater than 12', () => expect(
    dynamicRow.find(Col).at(6).prop('sm'),
  ).toEqual(12));

  it('should use 12 columns for xs', () => {
    const cols = dynamicRow.find(Col);
    expect.assertions(cols.length);

    cols.forEach(col => expect(col.prop('xs')).toEqual(12));
  });
});
