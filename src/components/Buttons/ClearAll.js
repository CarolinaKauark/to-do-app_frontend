import React, { useContext } from 'react';
import { TfiTrash } from 'react-icons/tfi';
import { requestDelete } from '../../API/requests';
import ToDoContext from '../../context/ToDoContext';

export default function ClearAll() {
  const { getTasks } = useContext(ToDoContext);

  const clearAllCompletedTasks = () => {
    requestDelete('task/completed')
      .then(() => getTasks());
  };

  return (
    <button
      type="button"
      onClick={ () => clearAllCompletedTasks() }
    >
      <i><TfiTrash /></i>
      {' '}
      Clear All
    </button>
  );
}
