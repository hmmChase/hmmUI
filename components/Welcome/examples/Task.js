/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

const Task = props => {
  return (
    <div className={`list-item ${props.task.state}`}>
      <label className='checkbox'>
        <input
          type='checkbox'
          defaultChecked={props.task.state === 'TASK_ARCHIVED'}
          disabled={true}
          name='checked'
        />

        <span
          className='checkbox-custom'
          onClick={() => props.onArchiveTask(props.task.id)}
        />
      </label>

      <div className='title'>
        <input
          type='text'
          value={props.task.title}
          readOnly={true}
          placeholder='Input title'
          style={{ textOverflow: 'ellipsis' }}
        />
      </div>

      <div className='actions' onClick={event => event.stopPropagation()}>
        {props.task.state !== 'TASK_ARCHIVED' && (
          <a onClick={() => props.onPinTask(props.task.id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func
};

export default Task;
