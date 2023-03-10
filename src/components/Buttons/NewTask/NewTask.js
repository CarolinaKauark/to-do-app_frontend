import React, { useContext } from 'react';
import ToDoContext from '../../../context/ToDoContext';
import './NewTask.css';

export default function NewTask() {
  const {
    setIsSomeModalOpen,
    setOpenedModalType,
    isLogged,
  } = useContext(ToDoContext);

  const handleOpenModalTask = () => {
    if (!isLogged) {
      setOpenedModalType('login');
      setIsSomeModalOpen(true);
    } else {
      setOpenedModalType('addTask');
      setIsSomeModalOpen(true);
    }
  };

  return (
    <button
      type="button"
      onClick={ handleOpenModalTask }
      className="newTask_button"
    >
      NewTask
    </button>
  );
}
