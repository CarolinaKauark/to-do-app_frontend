import React, { useContext, useEffect, useState } from 'react';
import ToDoContext from '../../../context/ToDoContext';
import './SyncGoogle.css';
import googleCalendar from '../../../images/googleCalendar.png';

export default function SyncGoogle() {
  const [tokenClient, setTokenClient] = useState('');
  const { gapi } = window;

  const {
    setIsSomeModalOpen,
    setOpenedModalType,
    isLogged,
    inProgress,
  } = useContext(ToDoContext);

  // eslint-disable-next-line max-len
  const CLIENT_ID = '423988138035-i5s5ecmgslgutdq3upmiauq2k751bet4.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyC7trDKLCQqmLWcu_UtXqFy49rgPhx0tOM';
  const DISCOVERY_DOCS = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
  const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

  useEffect(() => {
    const initializeGapiClient = async () => {
      await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOCS],
      });
    };
    gapi.load('client', initializeGapiClient);
  });

  useEffect(() => {
    const gisLoaded = () => {
      const token = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '',
      });
      setTokenClient(token);
    };
    gisLoaded();
  }, []);

  const dateHandler = (date, time) => {
    const newDate = date.split('T')[0];
    return `${newDate}T${time}:00-03:00`;
  };

  const insertEvents = async () => {
    try {
      await Promise.all(inProgress.map(async (event) => {
        const { startTime, endTime, description, id, date } = event;
        console.log(description);
        const newEvent = {
          summary: description,
          location: id,
          description,
          start: {
            dateTime: dateHandler(date, startTime),
            timeZone: 'America/Los_Angeles',
          },
          end: {
            dateTime: dateHandler(date, endTime),
            timeZone: 'America/Los_Angeles',
          },
        };

        await gapi.client.calendar.events.insert({
          calendarId: 'primary',
          resource: newEvent,
        });
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const openSyncModal = () => {
    setOpenedModalType('syncModal');
    setIsSomeModalOpen(true);
  };

  // const listUpcomingEvents = async () => {
  //   try {
  //     const request = {
  //       calendarId: 'primary',
  //       timeMin: (new Date()).toISOString(),
  //       showDeleted: false,
  //       singleEvents: true,
  //       maxResults: 10,
  //       orderBy: 'startTime',
  //     };
  //     const events = await gapi.client.calendar.events.list(request);
  //     return events.result.items;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleAuthClick = () => {
    tokenClient.callback = async (resp) => {
      if (resp.error !== undefined) {
        throw (resp);
      }
      // const events = await listUpcomingEvents();
      await insertEvents();
      // console.log(events);
      openSyncModal();
    };

    if (gapi.client.getToken() === null) {
      tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
      tokenClient.requestAccessToken({ prompt: '' });
    }
  };

  const syncWithGoogle = async () => {
    if (!isLogged) {
      setOpenedModalType('login');
      setIsSomeModalOpen(true);
    } else {
      handleAuthClick();
    }
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
