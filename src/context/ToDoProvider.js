/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ToDoContext from './ToDoContext';
import { requestData } from '../API/requests';

function ToDoProvider({ children }) {
  const [firstName, setFirstName] = useState('Guest');
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [openedModalType, setOpenedModalType] = useState('');
  const [isSomeModalOpen, setIsSomeModalOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [taskToEditId, setTaskToEditId] = useState(0);
  const [hasBeenEdit, setHasBeenEdit] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) setFirstName(user.firstName);
  }, []);

  const getTasks = async () => {
    requestData('/task')
      .then((data) => {
        const tasksInProgress = data.filter((task) => task.inProgress === true);
        const tasksCompleted = data.filter((task) => task.inProgress === false);
        setInProgress([...tasksInProgress]);
        setCompleted([...tasksCompleted]);
      });
  };

  const closeModal = () => {
    setOpenedModalType('');
    setIsSomeModalOpen(false);
  };

  const setGlobalFirstName = (name) => setFirstName(name);

  const logout = () => {
    localStorage.clear();
    setIsLogged(false);
    setFirstName('Guest');
    setInProgress([]);
    setCompleted([]);
  };

  const login = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    setGlobalFirstName(data.firstName);
    setIsLogged(true);
    closeModal();
    getTasks();
  };

  const alreadyLogin = () => {
    setIsLogged(true);
  };

  const EditTaskId = (id) => setTaskToEditId(id);

  const editHandler = () => setHasBeenEdit(!hasBeenEdit);

  const value = {
    firstName,
    inProgress,
    setInProgress,
    completed,
    setCompleted,
    openedModalType,
    setOpenedModalType,
    isSomeModalOpen,
    setIsSomeModalOpen,
    closeModal,
    setGlobalFirstName,
    isLogged,
    logout,
    login,
    alreadyLogin,
    getTasks,
    EditTaskId,
    taskToEditId,
    editHandler,
  };

  return (
    <ToDoContext.Provider value={ value }>
      { children }
    </ToDoContext.Provider>
  );
}

ToDoProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ToDoProvider;
