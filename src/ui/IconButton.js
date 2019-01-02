import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import {
  Button,
  OverlayTrigger,
} from 'react-bootstrap';
import * as Utils from '../utils';

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
}) => {
  let button = (
    <Button className={classNames('btn-icon', className)} {...props}>
      <FontAwesome name={icon} />
      {_.isEmpty(label) ? null : (
        <span className="btn-icon-label">{label}</span>
      )}
    </Button>
  );

  if (tooltip) {
    button = (
      <OverlayTrigger placement="top" overlay={Utils.tooltip(tooltip)}>
        {button}
      </OverlayTrigger>
    );
  }

  return button;
};


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
  /**
   * Tooltip text that should be shown when button is hovered
   */
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * The placement of the Tooltip component
   */
  placement: PropTypes.string,
};

IconButton.defaultProps = {
  placement: 'top',
  className: '',
  tooltip: null,
  label: null,
};

export default IconButton;
