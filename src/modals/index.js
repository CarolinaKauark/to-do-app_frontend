// import { useContext } from 'react';
import LoginModal from './Login/LoginModal';
import RegisterModal from './Register/RegisterModal';
// import ToDoContext from '../context/ToDoContext';
// import useClickOutside from '../hooks/useClickOutside';
import Modal from './Modal';
import AddTaskModal from './Task/AddTaskModal';

const modals = {
  login: (<Modal><LoginModal /></Modal>),
  register: (<Modal><RegisterModal /></Modal>),
  addTask: (<Modal><AddTaskModal /></Modal>),
  // editTask: () => (<Modal isRendered={ isSomeModalOpen }><EditTaskComponent /></Modal>),
};

export default modals;
