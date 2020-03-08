import React from 'react';

import allCombos from '../../../.storybook/allCombos';
import { AvatarList } from './AvatarList';
import Avatar from './Avatar';

export default {
  title: 'Welcome/Design System/AvatarList',
  component: AvatarList,
  parameters: {
    subcomponents: { Avatar }
  },
  excludeStories: ['users']
};

export const users = [
  {
    id: '1',
    name: 'Dominic Nguyen',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/263385'
  },
  {
    id: '2',
    name: 'Tom Coleman',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/132554'
  },
  {
    id: '3',
    name: 'Zoltan Olah',
    avatarUrl: 'https://avatars0.githubusercontent.com/u/81672'
  },
  {
    id: '4',
    name: 'Tim Hingston',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/1831709'
  }
];

const props = {
  loading: [true, false],
  size: [null, 'small'],
  users: [[], [users[0]], [users[0], users[1]], users],
  userCount: [null, 104]
};

export const all = () => allCombos(AvatarList, props);

export const short = () => <AvatarList users={users.slice(0, 2)} />;

export const smallSize = () => (
  <AvatarList users={users.slice(0, 2)} size='small' />
);

export const loading = () => <AvatarList loading />;

export const ellipsized = () => <AvatarList users={users} />;

export const bigUserCount = () => <AvatarList users={users} userCount={100} />;

export const empty = () => <AvatarList users={[]} />;
