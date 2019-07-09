/* eslint-disable consistent-return */
import _ from 'lodash';
import { assert, isValidValue } from '../utils';

const TEMPLATE_REGEX = /{(\d+)}/g;
const ALPHANUMERIC_REGEX = /^[a-zA-Z\s+\-_]*$/;

// URL Regex Table: https://mathiasbynens.be/demo/url-regex
// Source code: https://gist.github.com/dperini/729294
const URL_REGEX = new RegExp('^'
    // protocol identifier (optional)
    // short syntax // still required
    + '(?:(?:(?:https?|ftp):)?\\/\\/)'
    // user:pass BasicAuth (optional)
    + '(?:\\S+(?::\\S*)?@)?'
    + '(?:'
      // IP address exclusion
      // private & local networks
      + '(?!(?:10|127)(?:\\.\\d{1,3}){3})'
      + '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})'
      + '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})'
      // IP address dotted notation octets
      // excludes loopback network 0.0.0.0
      // excludes reserved space >= 224.0.0.0
      // excludes network & broacast addresses
      // (first & last IP address of each class)
      + '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])'
      + '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}'
      + '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))'
    + '|'
      // host & domain names, may end with dot
      // can be replaced by a shortest alternative
      // (?![-_])(?:[-\\w\\u00a1-\\uffff]{0,63}[^-_]\\.)+
      + '(?:'
        + '(?:'
          + '[a-z0-9\\u00a1-\\uffff]'
          + '[a-z0-9\\u00a1-\\uffff_-]{0,62}'
        + ')?'
        + '[a-z0-9\\u00a1-\\uffff]\\.'
      + ')+'
      // TLD identifier name, may end with dot
      + '(?:[a-z\\u00a1-\\uffff]{2,}\\.?)'
    + ')'
    // port number (optional)
    + '(?::\\d{2,5})?'
    // resource path (optional)
    + '(?:[/?#]\\S*)?'
  + '$', 'i');

/**
 * Formats the error message template.
 *
 * @example
 * formatTemplate('Value {0} is not a {1}', ['value', 'number']);
 * -> `Value foo is not a number`
 *
 * @param {String} template Error template
 * @param {Array}  args     Arguments used to replace the placeholders in the template
 * @return {String} Formatted string
 */
export const formatTemplate = (template, args) => template.replace(TEMPLATE_REGEX, (match, number) => {
  if (_.isUndefined(args[number])) {
    return match;
  }
  return args[number];
});

/**
 * Required value, for strings and arrays this also enforces that the value is not empty
 *
 * @param {String} errorTemplate Error message template
 * @return {String|undefined}
 */
export const required = (errorTemplate = 'Required') => (value) => {
  if (_.isNull(value) || _.isUndefined(value) || (_.isString(value) && !value.trim())) {
    return errorTemplate;
  }
  if ((_.isArray(value) || _.isObject(value)) && _.isEmpty(value)) {
    return errorTemplate;
  }
};

/**
 * Checks if the value matches the provided regular expression (pattern)
 *
 * @param {RegExp} pattern       Regular expression
 * @param {String} errorTemplate Error message template
 * @return {String|undefined}
 */
export const regex = (pattern, errorTemplate = 'Must match the pattern {0}') => {
  assert(_.isRegExp(pattern), 'Pattern arg must be a regex');

  return (value) => {
    // Empty values are allowed
    if (_.isNull(value) || _.isUndefined(value)) {
      return;
    }
    if (!_.isString(value) || !value.match(pattern)) {
      return formatTemplate(errorTemplate, [pattern]);
    }
  };
};

/**
 * Checks if the value is a valid URL
 *
 * @param {String} errorTemplate Error message template
 * @return {String|undefined}
 */
export const url = (errorTemplate = 'May contain only letters, numbers, dashes and underscores') => regex(
  URL_REGEX, errorTemplate,
);

/**
 * Checks if the value is a valid alphanumeric string
 *
 * @param {String} errorTemplate Error message template
 * @return {String|undefined}
 */
export const alpha = (errorTemplate = 'May contain only letters, underscores, dashes and spaces') => regex(
  ALPHANUMERIC_REGEX, errorTemplate,
);

/**
 * Checks if the value is contained in a list of accepted values
 *
 * @param {Array} values Allowed values
 * @return {String|undefined}
 */
export const containing = (values = []) => (value) => {
  if (!_.includes(values, value)) {
    return `The following values are allowed: [${_.join(values, ', ')}]`;
  }
};

/**
 * Checks if the value is not contained in a list of values
 *
 * @param {Array} values Disallowed values
 * @return {String|undefined}
 */
export const excluding = (values = []) => (value) => {
  if (_.includes(values, value)) {
    return `The following values are not allowed: [${_.join(values, ', ')}]`;
  }
};

function isValidLimitArg(limit) {
  return _.isNumber(limit);
}

function getLength(value) {
  switch (typeof value) {
    case 'number':
      return value;

    case 'string':
      // check if it's a number
      // eslint-disable-next-line no-case-declarations
      const number = _.toNumber(value);
      if (_.isNaN(number)) {
        return value.length;
      }
      return value;

    case 'object':
      // typeof null === "object", let's ignore it
      if (_.isNull(value)) {
        return;
      }

      return _.size(value);
    case 'boolean':
      return;
    default:
      throw new Error(`Could not get length from value: '${value}'.`);
  }
}

const validateLength = (validate, formatError) => (value) => {
  if (_.isNull(value) || _.isUndefined(value)) {
    return;
  }

  const length = getLength(value);

  if (_.isUndefined(length) || !validate(length)) {
    return formatError(value);
  }
};

const minErrorTemplates = {
  number: 'Must be at least {0}',
  string: 'Must contain at least {0} characters',
  object: 'Must contain at least {0} items',
};

/**
 * Checks if the value is not lower than the allowed minimum value
 *
 * @param {Number} limit         Minimum value
 * @param {String} errorTemplate Error message template
 * @return {String|undefined}
 */
export const min = (limit, errorTemplate) => {
  assert(isValidLimitArg(limit), 'Limit arg must be a number');

  return validateLength(
    k => limit <= k,
    v => formatTemplate(errorTemplate || minErrorTemplates[typeof v], [limit]),
  );
};

const maxErrorTemplates = {
  number: 'Must be at most {0}',
  string: 'Must contain at most {0} characters',
  object: 'Must contain at most {0} items',
};

/**
 * Checks if the value is not higher than the allowed maximum value
 *
 * @param {Number} limit         Maximum value
 * @param {String} errorTemplate Error message template
 * @return {String|undefined}
 */
export const max = (limit, errorTemplate) => {
  assert(isValidLimitArg(limit), 'Limit arg must be a number');

  return validateLength(
    k => limit >= k,
    v => formatTemplate(errorTemplate || maxErrorTemplates[typeof v], [limit]),
  );
};

const betweenErrorTemplates = {
  number: 'Must be between {0} and {1}',
  string: 'Must contain between {0} and {1} characters',
  object: 'Must contain between {0} and {1} items',
};

/**
 * Checks if the value is inside the specified range
 *
 * @param {Number} min         Minimum range value
 * @param {Number} max         Maximum range value
 * @param {String} errorTemplate Error message template
 * @return {String|undefined}
 */
// eslint-disable-next-line no-shadow
export const between = (min, max, errorTemplate) => {
  assert(isValidLimitArg(min), 'Min arg must be a number');
  assert(isValidLimitArg(max), 'Max arg must be a number');
  assert(min < max, 'Min arg can not be larger than max arg');

  return validateLength(
    k => min <= k && max >= k,
    v => formatTemplate(errorTemplate || betweenErrorTemplates[typeof v], [min, max]),
  );
};

/**
 * Combine multiple validation functions into a single function.
 *
 * @param {Array} validators         Array of validator functions.
 * @return {Array|undefined}
 */
// eslint-disable-next-line no-shadow
export const combine = validators => (
  (value) => {
    const errors = validators.map(validator => validator(value)).filter(isValidValue);

    if (_.isEmpty(errors)) return undefined;

    return errors;
  });
