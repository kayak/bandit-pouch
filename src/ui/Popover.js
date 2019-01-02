import React from 'react';
import PropTypes from 'prop-types';
import {
  OverlayTrigger,
} from 'react-bootstrap';
import {
  popover,
} from '../utils';

/**
 * Component that wraps the React element with a Bootstrap Popover
 */
const Popover = ({
  text,
  title,
  children,
  ...props
}) => (
  <OverlayTrigger {...props} overlay={popover(title, text)}>
    {children}
  </OverlayTrigger>
);

Popover.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Popover;
