import PropTypes from 'prop-types';
import React from 'react';

import {
  Button as BootstrapButton,
  DropdownButton as BootstrapDropdownButton,
} from 'react-bootstrap';
import _ from 'lodash';


/**
 * Component that renders a dropdown button. If no MenuItem is provided as children it will behave as a normal button.
 */
const DropdownButton = ({
  title,
  className,
  style,
  onSelect,
  children,
  ...props
}) => {
  const shouldUseNormalButton = React.Children.count(children) < 2;

  return (
    <span
      className={className}
      style={style}
    >
      {shouldUseNormalButton
        ? (
          <BootstrapButton
            {...props}
            onClick={onSelect}
          >
            {title}
          </BootstrapButton>
        ) : (
          <BootstrapDropdownButton
            {...props}
            title={title}
            onSelect={onSelect}
          >
            {children}
          </BootstrapDropdownButton>
        )}
    </span>
  );
};


DropdownButton.propTypes = {
  /**
   * The class name that is applied to the outer wrapper
   */
  className: PropTypes.string,
  /**
   * The style object that is applied to the outer wrapper
   */
  style: PropTypes.object,
  /**
   * The title that will be displayed when using the dropdown button
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * Callback function that returns the selected menu value, when dropdown mode is available
   */
  onSelect: PropTypes.func,
  /**
   * A list of MenuItem elements to be rendered in the dropdown. If none is provided then the button will behave as
   * a normal button
   */
  children: PropTypes.arrayOf(PropTypes.element),
};

DropdownButton.defaultProps = {
  className: '',
  style: {},
  title: '',
  onSelect: _.noop,
  children: null,
};

export default DropdownButton;
