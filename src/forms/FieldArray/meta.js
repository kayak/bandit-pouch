import _ from 'lodash';

function hasFieldArrayError(meta) {
  return (meta.dirty === true || meta.submitFailed === true) && !_.isEmpty(meta.error);
}

export function fieldArrayButtonBsStyle(meta) {
  return hasFieldArrayError(meta) ? 'danger' : 'primary';
}

export function fieldArrayMeta(meta) {
  return {
    ...meta,
    // Field arrays don't have touched in meta, so we emulate that with meta.dirty, meta.submitFailed and meta.error.
    // The idea here is to signalize field array level errors, which weren't displayed before, while leaving field
    // success state display for child fields only.
    touched: hasFieldArrayError(meta),
  };
}
