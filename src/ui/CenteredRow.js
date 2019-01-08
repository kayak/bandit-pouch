import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Component that renders a Row with a Column that is centrally positioned.
 */
const CenteredRow = ({ className, children, ...props }) => (
  <div className={classNames('centered-row', className)} {...props}>
    <div className="centered-row-border" />
    <div className="centered-row-contents text-center">
      {children}
    </div>
    <div className="centered-row-border" />
  </div>
);

CenteredRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string, PropTypes.node, PropTypes.element,
  ]).isRequired,
};

CenteredRow.defaultProps = {
  className: null,
};

export default CenteredRow;
