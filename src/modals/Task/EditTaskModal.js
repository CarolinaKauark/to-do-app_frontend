import React, { useContext } from 'react';
import { requestUpdate } from '../../API/requests';
import FormTask from '../../components/Tasks/FormTask';
import ToDoContext from '../../context/ToDoContext';

export default function EditTaskModal() {
  // const [taskToEdit, setTaskToEdit] = useState({});

  const { getTasks, closeModal, inProgress, taskToEditId } = useContext(ToDoContext);

  const editTask = async (newTask) => {
    requestUpdate(`/task/${newTask.id}`, newTask)
      .then(() => {
        getTasks();
        closeModal();
      });
  };

  // useEffect(() => {
  //   const [task] = inProgress.filter(({ id }) => id === taskToEditId);
  //   setTaskToEdit(task);
  // }, []);

  const [task] = inProgress.filter(({ id }) => id === taskToEditId);
  return (
    <section>
      <div>
        <button type="button" onClick={ closeModal }>X</button>
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
