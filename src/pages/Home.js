import React, { useContext, useEffect } from 'react';
import { requestPost } from '../API/requests';
import ClearAll from '../components/Buttons/ClearAll';
import NewTask from '../components/Buttons/NewTask';
import SyncGoogle from '../components/Buttons/SyncGoogle';
import Header from '../components/Header';
import Task from '../components/Tasks/Task';
import ToDoContext from '../context/ToDoContext';
import modals from '../modals';

export default function Home() {
  const {
    inProgress,
    openedModalType,
    isSomeModalOpen,
    logout,
    alreadyLogin,
  } = useContext(ToDoContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    requestPost('/user/validate', user)
      .then(() => alreadyLogin())
      .catch(() => logout());
  }, []);

  return (
    <main>
      {isSomeModalOpen && modals[openedModalType]}
      <Header />
      <h1>
        What are your plans for
        {' '}
        <strong>TODAY?</strong>
      </h1>
      <h2>
        Make your to do list and sync it with your Google calendar to track it daily.
      </h2>

      <section>
        <NewTask />
        <SyncGoogle />
      </section>

      <section>
        <div>
          <h3>In Progress</h3>
          { inProgress.map((task) => <Task key={ task.id } task={ task } />)}
        </div>
        <hr />
        <div>
          <div>
            <h3>Completed</h3>
            <ClearAll />
          </div>
          { inProgress.map((task) => <Task key={ task.id } task={ task } />)}
        </div>
      </section>
    </main>
  );
}
