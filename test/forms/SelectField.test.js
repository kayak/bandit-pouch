import {
  transformMultiValue,
  transformSingularValue,
} from '../../src/forms/SelectField';

describe('transformMultiValue', () => {
  it('returns empty array if value is null', () => expect(transformMultiValue(null)).toEqual([]));
  it('returns empty array if value is undefined', () => expect(transformMultiValue(undefined)).toEqual([]));
  it('returns empty array if value is empty array', () => expect(transformMultiValue([])).toEqual([]));
  it('returns list with values if array is populated', () => {
    const populated = [{ label: 'a', value: 'a' }, { label: 'b', value: 'b' }];
    return expect(transformMultiValue(populated)).toEqual(['a', 'b']);
  });
});

describe('transformSingularValue', () => {
  it('returns null if value is null', () => expect(transformSingularValue(null)).toEqual(null));
  it('returns null if value is undefined', () => expect(transformSingularValue(undefined)).toEqual(null));
  it('returns values if value is an object', () => expect(transformSingularValue({ label: 'a', value: 'a' })).toEqual('a'));
});
