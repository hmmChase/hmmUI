import React from 'react';
import allCombos from '../../../.storybook/allCombos';
import Avatar from './Avatar';

export default { title: 'components|Welcome/Design System/Avatar', component: Avatar };

const props = {
  loading: [true, false],
  size: ['tiny', 'small', 'medium', 'large'],
  username: ['Dominic Nguyen', ''],
  src: ['https://avatars2.githubusercontent.com/u/263385', '']
};

export const all = () => allCombos(Avatar, props);

export const large = () => (
  <div>
    <Avatar isLoading size='large' />
    <Avatar size='large' username='Tom Coleman' />
    <Avatar
      size='large'
      username='Tom Coleman'
      src='https://avatars2.githubusercontent.com/u/132554'
    />
  </div>
);

export const medium = () => (
  <div>
    <Avatar isLoading />
    <Avatar username='Tom Coleman' />
    <Avatar
      username='Tom Coleman'
      src='https://avatars2.githubusercontent.com/u/132554'
    />
  </div>
);

export const small = () => (
  <div>
    <Avatar isLoading size='small' />
    <Avatar size='small' username='Dominic Nguyen' />
    <Avatar
      size='small'
      username='Dominic Nguyen'
      src='https://avatars2.githubusercontent.com/u/263385'
    />
  </div>
);

export const tiny = () => (
  <div>
    <Avatar isLoading size='tiny' />
    <Avatar size='tiny' username='Dominic Nguyen' />
    <Avatar
      size='tiny'
      username='Dominic Nguyen'
      src='https://avatars2.githubusercontent.com/u/263385'
    />
  </div>
);
