import React, { useContext } from 'react';
import { CiLogin } from 'react-icons/ci';
import ToDoContext from '../../context/ToDoContext';

function Header() {
  const {
    firstName,
    setIsSomeModalOpen,
    setOpenedModalType,
  } = useContext(ToDoContext);

  const handleLogin = () => {
    setOpenedModalType('login');
    setIsSomeModalOpen(true);
  };

  return (
    <header>
      <div>
        <h5>
          Welcome,
          {' '}
          {firstName}
        </h5>
        <button type="button" onClick={ handleLogin }>
          <i><CiLogin /></i>
          <span>Login</span>
        </button>
      </div>
      <hr />
    </header>
  );
}

export default Header;
