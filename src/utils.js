import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Tooltip } from 'react-bootstrap';

export const CHILDREN_PROP_TYPE = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.element),
  PropTypes.element,
]);


// eslint-disable-next-line no-confusing-arrow
const debug = func => process.env.NODE_ENV !== 'production' ? func : _.noop;

/**
 * Utility function that creates a Tooltip element with the supplied text.
 *
 * @param {String} text Tooltip text
 * @return {*}
 */
export const tooltip = (text) => {
  if (Tooltip === _.get(text, 'type')) {
    return text;
  }

  return (<Tooltip id="tooltip">{text}</Tooltip>);
};

/**
 * Utility function that creates a Popover element with the supplied title and text.
 *
 * @param {String} title   Popover title
 * @param {String} content Popover contents
 * @return {*}
 */
export const popover = (title, content) => (
  <Popover id="popover" title={title}>{content}</Popover>
);

/**
 * Verify that a certain expectation is met, or throw a exception otherwise.
 *
 * This is useful for communicating assumptions in the code to other human
 * readers as well as catching bugs that accidentally violates these
 * expectations.
 *
 * Assertions are removed from production builds, so they can be freely added
 * for documentation and debugging purposes without worries of incurring any
 * performance penalty. However, because of that, they should not be used for
 * checks that could reasonably fail during normal usage. Furthermore, care
 * should be taken to avoid accidentally relying on side-effects produced from
 * evaluating the condition itself, since the code will not run in production.
 *
 * @method assert
 * @param condition
 * @param message
 */
export const assert = debug((condition, message = '') => {
  if (!condition) {
    throw new Error(`Assertion Failed: ${message}`);
  }
});

/**
 * Display a deprecation warning with the provided message and a stack trace
 * (Chrome and Firefox only) when the assigned method is called.
 *
 * Calls to this function are removed from production builds, so they can be
 * freely added for documentation and debugging purposes without worries of
 * incurring any performance penalty.
 *
 * @method deprecate
 * @param {String} message A description of the deprecation.
 * @param {Function} func  Function that should be deprecated.
 */
export const deprecate = debug((message, func) => function (...args) { // eslint-disable-line func-names
  const { stack } = new Error();
  // eslint-disable-next-line no-console
  console.warn(`DEPRECATION: ${message}\n\t${stack.split('\n').slice(2).join('\n\t')}`);
  return func.apply(this, args);
});
