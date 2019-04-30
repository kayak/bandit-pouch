import React from 'react';
import moment from 'moment';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';

import { Field } from 'redux-form'; // theme css file
import { DateRangePickerField } from 'bandit-pouch';
import ReduxForm from '../ReduxForm';

// Knobs
const label = () => text('label', 'Date');
const help = () => text('help', 'Type your help text.');
const disabled = () => boolean('disabled', false);
const placement = () =>
  select(
    'placement',
    {
      bottom: 'bottom',
      left: 'left',
      right: 'right',
      top: 'top',
    },
    'bottom'
  );
const numCalendarMonths = () =>
  number('numCalendarMonths', 1, {
    range: true,
    min: 1,
    max: 3,
    step: 1,
  });

// Actions
const onChangeValue = () => action('onChangeValue');

// Utils
function getFutureDatePickerRanges(now = moment()) {
  const tomorrowStart = moment(now)
    .endOf('day')
    .add(1, 'ms');
  const nextMonthStart = moment(now)
    .endOf('month')
    .add(1, 'ms');

  return {
    'For 2 weeks': [tomorrowStart, moment(tomorrowStart)
      .add(2, 'w')],
    'For a Month': [tomorrowStart, moment(tomorrowStart)
      .add(1, 'M')],
    'For 3 Months': [tomorrowStart, moment(tomorrowStart)
      .add(3, 'M')],
    'Next Month': [nextMonthStart, moment(nextMonthStart)
      .add(1, 'M')],
    'Next 3 Months': [nextMonthStart, moment(nextMonthStart)
      .add(3, 'M')],
  };
}

// Component
const withField = propsFn => (
  <Field
    component={DateRangePickerField}
    name="formField"
    label={label()}
    help={help()}
    onChangeValue={onChangeValue()}
    {...propsFn()}
  />
);

storiesOf('Forms|DateRangePickerField', module)
  .addDecorator(withField)
  .addDecorator(ReduxForm)
  .add('default', () => ({}))
  .add('with disabled', () => ({ disabled: true }))
  .add('with min date as yesterday', () => ({
    minDate: moment()
      .add(-1, 'days'),
  }))
  .add('with max date as tomorrow', () => ({
    maxDate: moment()
      .add(1, 'days'),
  }))
  .add('with 3 days from tomorrow disabled', () => ({
    disabledDates: [moment()
      .add(4, 'days')],
  }))
  .add('with different ranges', () => ({ ranges: getFutureDatePickerRanges() }))
  .add('without ranges', () => ({ ranges: {} }))
  .add('without input ranges', () => ({ inputRanges: {} }))
  .add('without both ranges and input ranges', () => ({
    ranges: {},
    inputRanges: {},
  }))
  .add('Interactive Mode', () => ({
    disabled: disabled(),
    placement: placement(),
    numCalendarMonths: numCalendarMonths(),
  }));
