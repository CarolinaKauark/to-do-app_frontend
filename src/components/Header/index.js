import React, { useContext } from 'react';
import { CiLogin } from 'react-icons/ci';
import ToDoContext from '../../context/ToDoContext';

function Header() {
  const {
    firstName,
    setIsSomeModalOpen,
    setOpenedModalType,
    isLogged,
    logout,
  } = useContext(ToDoContext);

  const handleLogin = () => {
    setOpenedModalType('login');
    setIsSomeModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    logout();
  };

  return (
    <header>
      <div>
        <h5>
          Welcome,
          {' '}
          {firstName}
        </h5>
        {isLogged ? (
          <button type="button" onClick={ handleLogout }>
            <i><CiLogin /></i>
            <span>Logout</span>
          </button>)
          : (
            <button type="button" onClick={ handleLogin }>
              <i><CiLogin /></i>
              <span>Login</span>
            </button>
          )}
      </div>
      <hr />
    </header>
  );
}

export default Header;
