import React from 'react';
import PropTypes from 'prop-types';
import ReactLoader from 'react-loaders';

/**
 * Renders the React Loader from `react-loaders` library wrapped inside a loader container element.
 */
export const Loader = ({ type, active }) => {
  if (!active) {
    return null;
  }

  return (
    <div className="loader-container">
      <ReactLoader active={active} type={type} />
    </div>
  );
};

Loader.propTypes = {
  /**
   * Specifies the React Loader type
   */
  type: PropTypes.string,
  /**
   * When this property is set to `false` the loader is not shown.
   */
  active: PropTypes.bool,
};

Loader.defaultProps = {
  type: 'ball-scale-ripple-multiple',
  active: true,
};

/**
 * Renders the Loader component that is vertically and horizontally centered using flex box.
 */
export const CenteredLoader = props => (
  <div
    style={{
      height: 400,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Loader {...props} />
  </div>
);

CenteredLoader.propTypes = {
  /**
   * Specifies the React Loader type
   */
  type: PropTypes.string,
  /**
   * When this property is set to `false` the loader is not shown.
   */
  active: PropTypes.bool,
};

CenteredLoader.defaultProps = {
  type: 'ball-scale-ripple-multiple',
  active: true,
};
