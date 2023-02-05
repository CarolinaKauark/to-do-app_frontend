import React, { useContext } from 'react';
import { requestPost } from '../../API/requests';
import FormTask from '../../components/Tasks/FormTask';
import ToDoContext from '../../context/ToDoContext';
import './Task.css';
// import '../ModalComponents.css';

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
    <section className="task_modal">
      <div
        className="close_btn"
        role="button"
        onClick={ closeModal }
        onKeyPress={ closeModal }
        tabIndex={ 0 }
      >
        X

      </div>

      <FormTask
        title="Task Name"
        button="Create Task"
        funcButton={ (newTask) => insertTask(newTask) }
      />
    </section>

  );
}
