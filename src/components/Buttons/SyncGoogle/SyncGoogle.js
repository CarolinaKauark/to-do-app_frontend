import React, { useContext } from 'react';
// import { getCalendar, login } from '../../../API/googleAPI';
import ToDoContext from '../../../context/ToDoContext';
import './SyncGoogle.css';
import googleCalendar from '../../../images/googleCalendar.png';

export default function SyncGoogle() {
  const { setIsSomeModalOpen, setOpenedModalType } = useContext(ToDoContext);

  const openSyncModal = () => {
    setOpenedModalType('syncModal');
    setIsSomeModalOpen(true);
  };

  const syncWithGoogle = async () => {
    // await login();
    // await getCalendar();
    openSyncModal();
  };

  return (
    <button
      className="syncGoogle_button"
      type="button"
      onClick={ () => syncWithGoogle() }
    >
      <img
        className="google_image"
        alt="Google Calendar Icon"
        src={ googleCalendar }
      />
      <p>
        Sync to Google Calendar
      </p>
    </button>
  );
}
