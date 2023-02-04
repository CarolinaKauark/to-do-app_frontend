/* eslint-disable react/jsx-max-depth */
import React, { useContext, useEffect } from 'react';
import { requestPost } from '../API/requests';
import ClearAll from '../components/Buttons/ClearAll/ClearAll';
import NewTask from '../components/Buttons/NewTask/NewTask';
import SyncGoogle from '../components/Buttons/SyncGoogle/SyncGoogle';
import Header from '../components/Header';
import Task from '../components/Tasks/Task';
import ToDoContext from '../context/ToDoContext';
import modals from '../modals';
import './Home.css';

export default function Home() {
  const {
    inProgress,
    openedModalType,
    isSomeModalOpen,
    logout,
    alreadyLogin,
    completed,
    getTasks,
  } = useContext(ToDoContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    requestPost('/user/validate', user)
      .then(() => {
        alreadyLogin();
        getTasks();
      })
      .catch(() => logout());
  }, []);

  useEffect(() => {}, [inProgress, completed]);

  return (
    <body className="toDoApp">
      {isSomeModalOpen && modals[openedModalType]}
      <Header />

      <main className="main_ToDo">
        <h1 className="main_title">
          What are your plans for
          {' '}
          <strong className="main_title_linear">TODAY?</strong>
        </h1>
        <h2 className="main_subTitle">
          Make your to do list and sync it with your Google calendar to track it daily.
        </h2>

        <section className="main_buttons">
          <NewTask />
          <SyncGoogle />
        </section>

        <section className="main_tasks">
          <div>
            <h3 className="main_task_title">In Progress</h3>
            { inProgress.map((task) => <Task key={ task.id } task={ task } />)}
          </div>
          <hr className="main_line" />
          <div>
            <div className="main_completed_div">
              <h3 className="main_task_title">Completed</h3>
              <ClearAll />
            </div>
            { completed.map((task) => <Task key={ task.id } task={ task } />)}
          </div>
        </section>
      </main>
    </body>
  );
}
