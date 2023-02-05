import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { gapi } from 'gapi-script';

const firebaseApp = initializeApp({
  // apiKey: 'AIzaSyD8lCg80_sjEUu8nOo7GdqSVbHGZZnuuS8',
  apiKey: 'AIzaSyAxN0Le7dOEzOMtiPLDnlqoJc8q4NQg7Us',
  authDomain: 'to-do-app-remotish.firebaseapp.com',
  projectId: 'to-do-app-remotish',
  storageBucket: 'to-do-app-remotish.appspot.com',
  messagingSenderId: '699737945157',
  appId: '1:699737945157:web:fe8e4ec92b6946ca965f2c',
});

const auth = getAuth(firebaseApp);

const initClient = () => {
  gapi.load('client', () => {
    gapi.client.init({
      apiKey: 'AIzaSyAlrC9__s-e56clD0GV-w8XVLGxG0OvmpU',
      // apiKey: 'AIzaSyD8lCg80_sjEUu8nOo7GdqSVbHGZZnuuS8',

      // eslint-disable-next-line max-len
      clientId: '699737945157-cri80q18oge00nqv2pd5q9hnklvfknis.apps.googleusercontent.com',
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
      scope: 'https://www.googleapis.com/auth/calendar',
    });

    gapi.client.load('calendar', 'v3', () => console.log('loaded calendar'));
  });
};

const login = () => {
  initClient();
  console.log('no login');
  const googleAuth = gapi.auth2.getAuthInstance().signIn();
  console.log(googleAuth);
  // const googleUser = await googleAuth.signIn();
  // console.log(googleUser);
  const token = googleAuth.getAuthResponse().id_token;

  const credential = auth.GoogleAuthProvider.credential(token);
  console.log('login');

  firebaseApp.signInAndRetrieveDataWithCredential(credential);
};

const logout = () => {
  firebaseApp.signOut();
};

const getCalendar = async () => {
  const events = await gapi.client.calendar.events.list({
    calendarId: 'primary',
    timeMin: (new Date()).toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 10,
    orderBy: 'startTime',
  });

  console.log(events.result.items);
  console.log('get calendar');

  return events.result.items;
};

// const syncWithGCalendar = async (eventsList) => {
//   const oldEvents = getCalendar();

//   // const newEvents = eventsList.filter((event) => event.)

//   const insert = await gapi.client.calendar.events.insert({
//     calendarId: 'primary',
//     start: {
//       dateTime: hoursFromNow(2),
//       timeZone: 'America/Los_Angeles',
//     },
//     end: {
//       dateTime: hoursFromNow(3),
//       timeZone: 'America/Los_Angeles',
//     },
//     summary: 'Have Fun!!!',
//     description: 'Do some cool stuff and have a fun time doing it',
//   });
// };

export { login, logout, getCalendar };
