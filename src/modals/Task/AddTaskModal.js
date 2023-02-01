import React, { useContext } from 'react';
import { requestPost } from '../../API/requests';
import FormTask from '../../components/Tasks/FormTask';
import ToDoContext from '../../context/ToDoContext';

export default function AddTaskModal() {
  const { getTasks, closeModal } = useContext(ToDoContext);

  const insertTask = async (newTask) => {
    requestPost('/task', newTask)
      .then(() => {
        getTasks();
        closeModal();
      });
  };

  return (
    <section>
      <div>
        <button type="button" onClick={ closeModal }>X</button>
      </div>

      <FormTask
        title="Task Name"
        button="Create Task"
        funcButton={ (newTask) => insertTask(newTask) }
      />
    </section>

  );
}
