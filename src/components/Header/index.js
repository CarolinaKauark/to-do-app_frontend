import React, { useContext } from 'react';
import { CiLogin } from 'react-icons/ci';
import ToDoContext from '../../context/ToDoContext';
import './Header.css';

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
    logout();
  };

  return (
    <header>
      <section className="header_info">
        <h5 className="header_title">
          Welcome,
          {' '}
          {firstName}
        </h5>
        {isLogged ? (
          <div className="header_button">
            <button
              className="button_log"
              type="button"
              onClick={ handleLogout }
            >
              <i><CiLogin /></i>
              <span>Logout</span>
            </button>
          </div>
        )
          : (
            <div className="header_button">
              <button
                className="button_log"
                type="button"
                onClick={ handleLogin }
              >
                <i><CiLogin /></i>
                <span>Login</span>
              </button>
            </div>
          )}
      </section>
      <hr className="header_line" />
    </header>
  );
}

export default Header;
