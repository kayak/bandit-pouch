import React from 'react';

import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { CenteredLoader, Loader } from 'bandit-pouch';

// Knobs
const type = () =>
  select(
    'type',
    {
      ballPulse: 'ball-pulse',
      ballGridPulse: 'ball-grid-pulse',
      ballClipRotate: 'ball-clip-rotate',
      ballClipRotatePulse: 'ball-clip-rotate-pulse',
      squareSpin: 'square-spin',
      ballClipRotateMultiple: 'ball-clip-rotate-multiple',
      ballPulseRise: 'ball-pulse-rise',
      ballRotate: 'ball-rotate',
      cubeTransition: 'cube-transition',
      ballZigZag: 'ball-zig-zag',
      ballZigZagDeflect: 'ball-zig-zag-deflect',
      ballTrianglePath: 'ball-triangle-path',
      ballScale: 'ball-scale',
      lineScale: 'line-scale',
      lineScaleParty: 'line-scale-party',
      ballScaleMultiple: 'ball-scale-multiple',
      ballPulseSync: 'ball-pulse-sync',
      ballBeat: 'ball-beat',
      lineScalePulseOut: 'line-scale-pulse-out',
      lineScalePulseOutRapid: 'line-scale-pulse-out-rapid',
      ballScaleRipple: 'ball-scale-ripple',
      ballScaleRippleMultiple: 'ball-scale-ripple-multiple',
      ballSpinFadeLoader: 'ball-spin-fade-loader',
      lineSpinFadeLoader: 'line-spin-fade-loader',
      triangleSkewSpin: 'triangle-skew-spin',
      pacman: 'pacman',
      ballGridBeat: 'ball-grid-beat',
      semiCircleSpin: 'semi-circle-spin',
    },
    'ball-pulse'
  );
const active = () => boolean('active', true);

// Actions

// Component
const withLoader = propsFn => <Loader {...propsFn()} />;
const withCenteredLoader = propsFn => <CenteredLoader {...propsFn()} />;

storiesOf('UI|Loader', module)
  .addDecorator(withLoader)
  .add('default', () => ({}))
  .add('with active as False', () => ({ active: false }))
  .add('with other type', () => ({ type: 'pacman' }))
  .add('Interactive Mode', () => ({
    type: type(),
    active: active()
  }));

storiesOf('UI|CenteredLoader', module)
  .addDecorator(withCenteredLoader)
  .add('default', () => ({}))
  .add('with active as False', () => ({ active: false }))
  .add('with other type', () => ({ type: 'pacman' }))
  .add('Interactive Mode', () => ({
    type: type(),
    active: active()
  }));
