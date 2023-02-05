import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CgEditFlipH } from 'react-icons/cg';
import ToDoContext from '../../context/ToDoContext';
import { requestUpdate } from '../../API/requests';
import './Task.css';

function Task({ task }) {
  const { description, startTime, endTime, date, inProgress, isHighPriority, id } = task;
  const {
    EditTaskId,
    setOpenedModalType,
    setIsSomeModalOpen,
    getTasks,
  } = useContext(ToDoContext);

  const OpenEditTaskModal = () => {
    EditTaskId(id);
    setOpenedModalType('editTask');
    setIsSomeModalOpen(true);
  };

  const changingTaskStatus = async () => {
    requestUpdate(`/task/${id}`, {
      description,
      startTime,
      endTime,
      date,
      inProgress: !inProgress,
      isHighPriority })
      .then(() => getTasks());
  };
  const moment = new Date(date).toDateString().split(' ');

  return (
    <article className="task_component">
      <input
        type="checkbox"
        checked={ !inProgress }
        onChange={ () => changingTaskStatus() }
      />

      <div className="column">
        <h4 className="task_description">{ description }</h4>
        <div className="inline">
          <p className="subTitle_task">{`${moment[0]}, ${moment[1]} ${moment[2]}`}</p>
          {isHighPriority && <span className="high_priority">High Priority</span>}
          <p className="subTitle_task">
            {startTime}
            {Number(startTime.split(':')[0]) < +('12') ? 'AM' : 'PM'}
            {' '}
            -
            {' '}
            {endTime}
            {Number(endTime.split(':')[0]) < +('12') ? 'AM' : 'PM'}

          </p>
        </div>
      </div>

      <div
        className="edit_btn"
        role="button"
        onClick={ () => OpenEditTaskModal() }
        onKeyPress={ OpenEditTaskModal }
        tabIndex={ 0 }
      >
        <CgEditFlipH />
        <p className="edit_txt">Edit</p>
      </div>

    </article>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    isHighPriority: PropTypes.bool,
    inProgress: PropTypes.bool,
    date: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Task;
