import React from 'react';
import PropTypes from 'prop-types';
import {
  OverlayTrigger,
} from 'react-bootstrap';
import {
  tooltip,
} from '../utils';

/**
 * Component that wraps the React element with a Bootstrap Tooltip
 */
const Tooltip = ({ text, children, ...props }) => (
  <OverlayTrigger
    overlay={tooltip(text)}
    popperConfig={{
      modifiers: {
        preventOverflow: {
          enabled: false,
        },
        hide: {
          enabled: false,
        },
      },
    }}
    {...props}
  >
    {children}
  </OverlayTrigger>
);

Tooltip.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  children: PropTypes.element.isRequired,
};

export default Tooltip;
