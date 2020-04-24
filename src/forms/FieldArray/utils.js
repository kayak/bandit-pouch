// eslint-disable-next-line no-underscore-dangle
const isFieldsFromReduxForm = fields_ => fields_._isFieldArray;

export function getAllValues(fields) {
  return isFieldsFromReduxForm(fields) ? fields.getAll() : fields.value;
}

export function getValueByIndex(fields, index) {
  return isFieldsFromReduxForm(fields) ? fields.get(index) : fields.value[index];
}

export default {
  getAllValues,
  getValueByIndex,
};
