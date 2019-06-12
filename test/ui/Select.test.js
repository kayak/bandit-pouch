import React from 'react';
import { transformOptions, transformValue } from '../../src/ui/Select';

describe('transformOptions', () => {
  it('returns undefined when options is undefined', () => {
    expect(transformOptions(undefined)).toEqual(undefined);
  });

  it('returns undefined when options is null', () => {
    expect(transformOptions(null)).toEqual(undefined);
  });

  it('returns an empty array when options is an empty aray', () => {
    expect(transformOptions([])).toEqual([]);
  });

  it('returns values with labels when options have no labels', () => {
    expect(transformOptions([{value: 1}])).toEqual([{value: 1, label: '1'}]);
  });

  it('replaces disabled with isDisabled for options', () => {
    expect(
      transformOptions([{value: 1, label: '1', disabled: true}]),
    ).toEqual([
      {value: 1, label: '1', isDisabled: true},
    ]);
  });
});

describe('transformValue(value, multi, options)', () => {
  const option1 = {value: 1, label: 'test1'};
  const option2 = {value: 2, label: 'test2'};

  describe.each([
    // With invalid value
    // value, options, expected
    [undefined, [option1], undefined],
    [undefined, [], undefined],
    [null, [option1], undefined],
    [null, [], undefined],
    ['', [], undefined],

    // With object value
    // value, options, expected
    [option2, [option1], option2],
    [option2, undefined, option2],
    [option2, null, option2],

    // With primitive value
    // value, options, expected
    [1, [option1], option1],
    [2, [option1], undefined],
    [1, undefined, undefined],
    [1, null, undefined],
    [1, [], undefined],
  ])(
    '.transformValue(%p, %p) for single value',
    (value, options, expectedValue) => {
      it(`returns ${expectedValue}`, () => {
        expect(transformValue(value, false, options)).toEqual(expectedValue);
      });
  });

  describe.each([
    // With invalid value
    // value, options, expected
    [undefined, [option1], undefined],
    [undefined, [], undefined],
    [null, [option1], undefined],
    [null, [], undefined],
    [[], [], undefined],

    // With object value
    // value, options, expected
    [[option2], [option1], [option2]],
    [[option2], undefined, [option2]],
    [[option2], null, [option2]],

    // With primitive value
    // value, options, expected
    [[1], [option1], [option1]],
    [[2], [option1], []],
    [[1], undefined, undefined],
    [[1], null, undefined],
    [[1], [], undefined],
  ])(
    '.transformValue(%p, %p) for multi value',
    (value, options, expectedValue) => {
      it(`returns ${expectedValue}`, () => {
        expect(transformValue(value, true, options)).toEqual(expectedValue);
      });
    });
});
