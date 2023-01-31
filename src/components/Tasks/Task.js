import React from 'react';
import PropTypes from 'prop-types';

function Task({ task }) {
  const { description, startTime, endTime, isHighPriority, inProgress } = task;
  return (
    <div>
      <input type="checkbox" checked={ !inProgress } />
      <h4>{ description }</h4>
      <div>
        {isHighPriority && <span>High Priority</span>}
        <p>
          {startTime}
          {' '}
          -
          {' '}
          {endTime}
        </p>
      </div>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    isHighPriority: PropTypes.string,
    inProgress: PropTypes.bool,
  }).isRequired,
};

export default Task;
