import { ARRAY_ERROR } from 'final-form';
import _ from 'lodash';

function hasFieldArrayError(meta) {
  return (meta.touched === true || meta.submitFailed === true)
    && (!_.isEmpty(meta.error) || !_.isEmpty(meta.submitError));
}

function transformError(error) {
  // [final-form] it doesn't look like ARRAY_ERROR get's set by final-form itself,
  // but can be used on error transformers for errors on the whole array-field
  if (_.get(error, ARRAY_ERROR)) return error[ARRAY_ERROR];

  // [final-form] in case of (sub)field errors within an array-field meta.error gets set to these errors
  // we don't want to render these here, only in case we get an error string or array of error strings we show them
  // on the array-field level. otherwise the fields themselves show the errors
  const isValidErrorData = _.isString(error) || (_.isArray(error) && _.isString(error[0]));
  if (isValidErrorData) return error;

  return undefined;
}

export function fieldArrayButtonBsStyle(meta) {
  return hasFieldArrayError(meta) ? 'danger' : 'primary';
}

export function fieldArrayMeta(meta) {
  return {
    ...meta,

    error: transformError(meta.error),
    submitError: transformError(meta.submitError),

    // Field arrays don't have touched in meta, so we emulate it.
    // The idea here is to signalize field array level errors, which weren't displayed before, while leaving field
    // success state display for child fields only.
    touched: hasFieldArrayError(meta),
  };
}
