import React, { useContext } from 'react';
import ToDoContext from '../../context/ToDoContext';

export default function SyncModal() {
  const { closeModal } = useContext(ToDoContext);

  return (
    <section>
      <button type="button" onClick={ closeModal }>X</button>
      <div>
        <h1>Synchronizing Tasks</h1>
        <p>Google Calendar synchronized with your current task list</p>
        <button type="button" onClick={ closeModal }>Ok</button>
      </div>
    </section>
  );
}
