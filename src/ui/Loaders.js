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
  type: PropTypes.oneOf([
    'ball-pulse',
    'ball-grid-pulse',
    'ball-clip-rotate',
    'ball-clip-rotate-pulse',
    'square-spin',
    'ball-clip-rotate-multiple',
    'ball-pulse-rise',
    'ball-rotate',
    'cube-transition',
    'ball-zig-zag',
    'ball-zig-zag-deflect',
    'ball-triangle-path',
    'ball-scale',
    'line-scale',
    'line-scale-party',
    'ball-scale-multiple',
    'ball-pulse-sync',
    'ball-beat',
    'line-scale-pulse-out',
    'line-scale-pulse-out-rapid',
    'ball-scale-ripple',
    'ball-scale-ripple-multiple',
    'ball-spin-fade-loader',
    'line-spin-fade-loader',
    'triangle-skew-spin',
    'pacman',
    'ball-grid-beat',
    'semi-circle-spin',
  ]),
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
  type: PropTypes.oneOf([
    'ball-pulse',
    'ball-grid-pulse',
    'ball-clip-rotate',
    'ball-clip-rotate-pulse',
    'square-spin',
    'ball-clip-rotate-multiple',
    'ball-pulse-rise',
    'ball-rotate',
    'cube-transition',
    'ball-zig-zag',
    'ball-zig-zag-deflect',
    'ball-triangle-path',
    'ball-scale',
    'line-scale',
    'line-scale-party',
    'ball-scale-multiple',
    'ball-pulse-sync',
    'ball-beat',
    'line-scale-pulse-out',
    'line-scale-pulse-out-rapid',
    'ball-scale-ripple',
    'ball-scale-ripple-multiple',
    'ball-spin-fade-loader',
    'line-spin-fade-loader',
    'triangle-skew-spin',
    'pacman',
    'ball-grid-beat',
    'semi-circle-spin',
  ]),
  /**
   * When this property is set to `false` the loader is not shown.
   */
  active: PropTypes.bool,
};

CenteredLoader.defaultProps = {
  type: 'ball-scale-ripple-multiple',
  active: true,
};
