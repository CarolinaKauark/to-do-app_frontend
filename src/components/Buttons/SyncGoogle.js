import React, { useContext } from 'react';
import ToDoContext from '../../context/ToDoContext';
// import googleCalendar from '../../images/googleCalendar.png';

export default function SyncGoogle() {
  const { setIsSomeModalOpen, setOpenedModalType } = useContext(ToDoContext);

  const openSyncModal = () => {
    setOpenedModalType('syncModal');
    setIsSomeModalOpen(true);
  };

  const syncWithGoogle = () => {
    openSyncModal();
  };

  return (
    <button
      type="button"
      onClick={ () => syncWithGoogle() }
    >
      {/* <img
        alt="Google Calendar Icon"
        src={ googleCalendar }
      /> */}
      Sync to Google Calendar
    </button>
  );
}
