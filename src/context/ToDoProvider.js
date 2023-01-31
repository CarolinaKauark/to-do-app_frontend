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

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) setFirstName(user.firstName);
  }, []);

  const closeModal = () => {
    setOpenedModalType('');
    setIsSomeModalOpen(false);
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
