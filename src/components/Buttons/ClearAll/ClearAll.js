import React, { useContext } from 'react';
import { TfiTrash } from 'react-icons/tfi';
import { requestDelete } from '../../../API/requests';
import ToDoContext from '../../../context/ToDoContext';
import './ClearAll.css';

export default function ClearAll() {
  const { getTasks } = useContext(ToDoContext);

  const clearAllCompletedTasks = () => {
    requestDelete('task/completed')
      .then(() => getTasks());
  };

  return (
    <button
      className="clearAll_button"
      type="button"
      onClick={ () => clearAllCompletedTasks() }
    >
      <i className="trash_icon"><TfiTrash /></i>
      {' '}
      <p>Clear All</p>
    </button>
  );
}
