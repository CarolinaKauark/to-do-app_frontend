// import { useContext } from 'react';
import LoginModal from './Login/LoginModal';
import RegisterModal from './Register/RegisterModal';
// import ToDoContext from '../context/ToDoContext';
// import useClickOutside from '../hooks/useClickOutside';
import Modal from './Modal';
import AddTaskModal from './Task/AddTaskModal';
import EditTaskModal from './Task/EditTaskModal';
import SyncModal from './SyncModal/SyncModal';

const modals = {
  login: (<Modal><LoginModal /></Modal>),
  register: (<Modal><RegisterModal /></Modal>),
  addTask: (<Modal><AddTaskModal /></Modal>),
  editTask: (<Modal><EditTaskModal /></Modal>),
  syncModal: (<Modal><SyncModal /></Modal>),

};

export default modals;
