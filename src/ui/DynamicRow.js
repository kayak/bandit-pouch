import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import {
  Col,
  Row,
} from 'react-bootstrap';

const MAX_COLUMNS = 12;


/**
 * Dynamically renders a Bootstrap grid ensuring that a new Row is used once the column width exceeds 12. This helps to
 * avoid wrapping issues and also can handle having components with various widths.
 */
const DynamicRow = ({
  items, render, defaultWidth = MAX_COLUMNS, children, className, style,
}) => {
  let rowWidth = MAX_COLUMNS;


  let itemIndex = 0;

  const rows = _.reduce(items, (rowsPerItem, item, colIndex) => {
    const itemWidth = Math.min(item.width || defaultWidth, 12);
    if (rowWidth + itemWidth > 12) {
      rowsPerItem.push([]);
      rowWidth = 0;
    }

    if (_.isUndefined(item.visible) || item.visible) {
      rowsPerItem[rowsPerItem.length - 1].push(
        <Col
          key={colIndex}
          xs={12}
          sm={itemWidth}
        >
          {render(item, itemIndex)}
        </Col>,
      );
      rowWidth += itemWidth;
    }

    itemIndex += 1;
    return rowsPerItem;
  }, []);

  if (!_.isUndefined(children)) {
    /* Place the children in the remaining space of the last row or create a new row for it if there is none. */
    let width = MAX_COLUMNS - rowWidth;
    if (width < 1) {
      width = MAX_COLUMNS;
      rows.push([]);
    }

    const lastRow = rows[rows.length - 1];
    lastRow.push(
      <Col
        key="extra"
        xs={MAX_COLUMNS}
        sm={width}
      >
        {children}
      </Col>,
    );
  }

  return (
    <div className={className} style={style}>
      {_
        .chain(rows)
        .filter(row => !_.isEmpty(row))
        .map((row, rowIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <Row key={rowIndex}>
            {row}
          </Row>
        ))
        .value()}
    </div>
  );
};

DynamicRow.propTypes = {
  /**
   * The class name that is applied to the outer wrapper
   */
  className: PropTypes.string,
  /**
   * The style object that is applied to the outer wrapper
   */
  style: PropTypes.object,
  /*
   * The contents of the grid. Items should have an attribute of "width", otherwise the defaultWidth is used.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    width: PropTypes.number,
  })).isRequired,
  /*
   * The contents of the grid. Items should have an attribute of "width", otherwise the defaultWidth is used.
   */
  render: PropTypes.func.isRequired,
  /*
   *  The render function for the contents of the column. This behaves like the map function over `items`.
   *  The render function has the signature `render(item, index)`.
   */
  defaultWidth: PropTypes.number.isRequired,
  /**
   * A list of children column elements to be rendered
   */
  children: PropTypes.arrayOf(PropTypes.element),
};

DynamicRow.defaultProps = {
  className: '',
  style: {},
  children: null,
};

export default DynamicRow;
