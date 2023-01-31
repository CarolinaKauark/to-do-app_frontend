// import { useContext } from 'react';
import LoginModal from '../components/Login/LoginModal';
import RegisterModal from '../components/Register/RegisterModal';
// import ToDoContext from '../context/ToDoContext';
// import useClickOutside from '../hooks/useClickOutside';
import Modal from './Modal';

const modals = {
  login: (<Modal><LoginModal /></Modal>),
  register: (<Modal><RegisterModal /></Modal>),

  // addTask: () => (<Modal isRendered={ isSomeModalOpen }><AddTaskComponent /></Modal>),
  // editTask: () => (<Modal isRendered={ isSomeModalOpen }><EditTaskComponent /></Modal>),
};

export default modals;
