import React from 'react';
import PropTypes from 'prop-types';

/**
 * Used to wrap a label in abbreviation tags if a valid tooltip is provided. We differentiate the abbr style
 * depending on the type passed in so that the dotted line is shown properly on the metric labels.
 */
const Abbreviation = ({
  label, type, tooltip, ...props
}) => {
  if (tooltip) {
    return (
      <abbr
        {...props}
        title={tooltip}
        style={{ borderBottom: `1px dotted ${type === 'metric' ? '#FFF' : '#777'}` }}
      >
        {label}
      </abbr>
    );
  }

  return (<span {...props}>{label}</span>);
};

Abbreviation.propTypes = {
  /**
   * Abbreviation label text defining the item
   */
  label: PropTypes.string.isRequired,
  /**
   * String description of the label
   */
  tooltip: PropTypes.string,
  /**
   * The type of object that the label is being defined for.
   * Choices: metric, dimension or any(default)
   */
  type: PropTypes.oneOf(['metric', 'dimension', 'any']),
};

Abbreviation.defaultProps = {
  type: 'any',
  tooltip: null,
};

export default Abbreviation;
