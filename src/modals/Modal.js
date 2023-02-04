import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import useClickOutside from '../hooks/useClickOutside';
import ToDoContext from '../context/ToDoContext';
import './Modal.css';

export default function Modal({ children }) {
  const modalContainerRef = useRef();
  const { closeModal } = useContext(ToDoContext);

  useClickOutside({
    ref: modalContainerRef,
    onClickOutside: closeModal,
  });

  return (
    <div ref={ modalContainerRef } className="modal">
      {children}
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
