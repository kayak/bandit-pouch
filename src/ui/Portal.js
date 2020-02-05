import React from 'react';
import PropTypes from 'prop-types';
import * as ReactDOM from 'react-dom';

/**
 * Component that creates a React Portal that contains any of the provided children.
 */
function Portal({ targetId, children }) {
  const mount = document.getElementById(targetId);
  const el = document.createElement('div');

  React.useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return ReactDOM.createPortal(children, el);
}

Portal.propTypes = {
  /**
   * The id of the node in which the children will be rendered.
   */
  targetId: PropTypes.string.isRequired,
};

export default Portal;
