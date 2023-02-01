import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ToDoContext from '../../context/ToDoContext';

function Task({ task }) {
  const [day, setDay] = useState('');

  const { description, startTime, endTime, date, isHighPriority, id } = task;
  const { EditTaskId, setOpenedModalType, setIsSomeModalOpen } = useContext(ToDoContext);

  const OpenEditTaskModal = () => {
    EditTaskId(id);
    setOpenedModalType('editTask');
    setIsSomeModalOpen(true);
  };

  useEffect(() => {
    const moment = new Date(date).toDateString();
    console.log(moment);
    setDay(moment);
  }, []);

  return (
    <div>
      {/* <input type="checkbox" checked={ !inProgress } /> */}
      <h4>{ description }</h4>
      <div>
        <p>{day}</p>
        {isHighPriority && <span>High Priority</span>}
        <p>
          {startTime}
          {' '}
          -
          {' '}
          {endTime}
        </p>
      </div>
      <button
        type="submit"
        onClick={ () => OpenEditTaskModal() }
      >
        Edit
      </button>
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
    date: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Task;
