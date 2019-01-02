import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import {
  Button,
} from 'react-bootstrap';

/**
 * Component that renders a button with a Font Awesome Icon.
 */
const IconButton = ({
  icon,
  label,
  tooltip,
  placement,
  className,
  ...props
}) => (
  <Button className={classNames('btn-icon', className)} {...props}>
    <FontAwesome name={icon} />
    {_.isEmpty(label) ? null : (
      <span className="btn-icon-label">{label}</span>
    )}
  </Button>
);

IconButton.propTypes = {
  /**
   * Font awesome icon name to be shown in the Button
   */
  icon: PropTypes.string.isRequired,
  /**
   * The class name that is applied to the button
   */
  className: PropTypes.string,
  /**
   * Label that will be displayed next to the icon
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

IconButton.defaultProps = {
  className: '',
  label: null,
};

export default IconButton;
