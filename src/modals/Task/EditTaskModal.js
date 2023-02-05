import React, { useContext } from 'react';
import { requestUpdate } from '../../API/requests';
import FormTask from '../../components/Tasks/FormTask';
import ToDoContext from '../../context/ToDoContext';
import './Task.css';

export default function EditTaskModal() {
  // const [taskToEdit, setTaskToEdit] = useState({});

  const { getTasks, closeModal,
    inProgress, taskToEditId, editHandler } = useContext(ToDoContext);

  const editTask = async (newTask) => {
    requestUpdate(`/task/${newTask.id}`, newTask)
      .then(() => {
        getTasks();
        editHandler();
        closeModal();
      });
  };

  const [task] = inProgress.filter(({ id }) => id === taskToEditId);
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
        title="Edit Name"
        button="Edit Task"
        funcButton={ (newTask) => editTask(newTask) }
        task={ task }
      />
    </section>

  );
}
