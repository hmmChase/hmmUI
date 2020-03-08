import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { Emoji } from './1-Button.stories';

export default {
  title: 'Welcome',
  // name: 'to Storybook',
  component: Welcome
};

export const toStorybook = () => (
  <>
    <Welcome showApp={linkTo('Button')} />
    <Emoji />
  </>
);

// ToStorybook.story = {
//   name: 'to Storybook'
// };
