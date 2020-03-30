import React from 'react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

// declare component
export default {
  title: 'components|Welcome/Design System/Task',
  component: Task,
  excludeStories: /.*Data$/
};

// mock data
export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const longTitleStringData = {
  ...taskData,
  title:
    "This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!"
};

export const taskedPinnedData = { ...taskData, state: 'TASK_PINNED' };

export const taskedArchivedData = { ...taskData, state: 'TASK_ARCHIVED' };

// mock event handlers
export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
};

// test states
export const Default = () => <Task task={taskData} {...actionsData} />;

export const LongTitle = () => (
  <Task task={longTitleStringData} {...actionsData} />
);

export const Pinned = () => <Task task={taskedPinnedData} {...actionsData} />;

export const Archived = () => (
  <Task task={taskedArchivedData} {...actionsData} />
);
