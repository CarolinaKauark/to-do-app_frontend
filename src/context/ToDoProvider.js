/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ToDoContext from './ToDoContext';

function ToDoProvider({ children }) {
  const [firstName, setFirstName] = useState('Guest');
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [openedModalType, setOpenedModalType] = useState('');
  const [isSomeModalOpen, setIsSomeModalOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) setFirstName(user.firstName);
  }, []);

  const closeModal = () => {
    setOpenedModalType('');
    setIsSomeModalOpen(false);
  };

  const setGlobalFirstName = (name) => setFirstName(name);

  const logout = () => {
    localStorage.clear();
    setIsLogged(false);
    setFirstName('Guest');
  };

  const login = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    setGlobalFirstName(data.firstName);
    setIsLogged(true);
    closeModal();
  };

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
