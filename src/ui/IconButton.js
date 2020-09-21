import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  FontAwesomeIcon,
} from '@fortawesome/react-fontawesome';
import {
  Button,
} from 'react-bootstrap';
import Tooltip from './Tooltip';

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
  const button = (
    <Button className={classNames('btn-icon', className)} {...props}>
      <FontAwesomeIcon icon={icon} />
      {_.isEmpty(label) ? null : (
        <span className="btn-icon-label">{label}</span>
      )}
    </Button>
  );

  if (!tooltip) {
    return button;
  }

  return (
    <Tooltip placement={placement} text={tooltip}>
      {button}
    </Tooltip>
  );
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
   * Placement prop passed to the OverlayTrigger of the Tooltip
   */
  placement: PropTypes.string,
  /**
   * Text that is shown within the tooltip
   */
  tooltip: PropTypes.string,
};

IconButton.defaultProps = {
  className: '',
  label: null,
  tooltip: null,
  placement: undefined,
};

export default IconButton;
