import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import {
  Row,
} from 'react-bootstrap';


/**
 * This is a simpler version of the dynamic row component.
 */
const MagicRow = ({
  className, style, colSizeKey, children,
}) => {
  const rows = [[]];
  let colCount = 0;
  _.flatMap(children)
    .filter(_.identity)
    .forEach((child) => {
      const newCols = child.props[colSizeKey];
      if (colCount + newCols > 12) {
        rows.push([]);
        colCount = 0;
      }

      rows[rows.length - 1].push(child);
      colCount += newCols;
    });

  return (
    <div
      className={className}
      style={style}
    >
      {_.map(rows, (row, rowIndex) => (
        <Row key={rowIndex}>
          {row}
        </Row>
      ))}
    </div>
  );
};


MagicRow.propTypes = {
  /**
   * The class name that is applied to the outer wrapper
   */
  className: PropTypes.string,
  /**
   * The style object that is applied to the outer wrapper
   */
  style: PropTypes.object,
  colSizeKey: PropTypes.string,
  /**
   * A list of MenuItem elements to be rendered in the dropdown. If none is provided then the button will behave as
   * a normal button
   */
  children: PropTypes.arrayOf(PropTypes.element),
};

MagicRow.defaultProps = {
  className: '',
  style: {},
  colSizeKey: 'xs',
  children: null,
};

export default MagicRow;
