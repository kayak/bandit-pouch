import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  suite: 'MyStoryshots',
  storyKindRegex: /^((?!.*?DontTest).)*$/,
});
