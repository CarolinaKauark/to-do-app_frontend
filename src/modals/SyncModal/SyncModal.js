import React, { useContext } from 'react';
import ToDoContext from '../../context/ToDoContext';
import './SyncModal.css';

export default function SyncModal() {
  const { closeModal } = useContext(ToDoContext);

  return (
    <section className="sync_modal">
      <div
        className="close_btn"
        role="button"
        onClick={ closeModal }
        onKeyPress={ closeModal }
        tabIndex={ 0 }
      >
        X

      </div>
      <div className="sync_info">
        <h1 className="sync_title">Synchronizing Tasks</h1>
        <p className="sync_msg">
          Google Calendar synchronized with your current task list
        </p>
        <button
          className="ok_btn"
          type="button"
          onClick={ closeModal }
        >
          Ok

        </button>
      </div>
    </section>
  );
}
