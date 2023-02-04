import React, { useContext, useState } from 'react';
import { requestLogin } from '../../API/requests';
import ToDoContext from '../../context/ToDoContext';
import './LoginModal.css';

export default function LoginModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(false);

  const {
    setOpenedModalType,
    setIsSomeModalOpen,
    closeModal,
    login,
  } = useContext(ToDoContext);

  const handleLogin = async () => {
    requestLogin('/user/login', { email, password })
      .then((data) => {
        login(data);
      })
      .catch(() => setError(true));
  };

  const openRegisterModal = () => {
    setOpenedModalType('register');
    setIsSomeModalOpen(true);
  };

  return (
    <section className="login_modal">
      <button type="button" onClick={ closeModal }>X</button>
      <h2>Login to Use the App</h2>
      <form>
        <label htmlFor="email">
          Email address
          <input
            type="email"
            placeholder="Enter Your E-mail"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            placeholder="Enter Your Password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
        <label htmlFor="rememberMe">
          <input
            type="checkbox"
            checked={ rememberMe }
            onChange={ () => setRememberMe(!rememberMe) }
          />
          Remenber Me
        </label>
      </form>
      <button type="submit" onClick={ handleLogin }>Login</button>
      {error && <p>Não foi possível realizar o login</p>}
      <div>
        <p>Don´t have an account?</p>
        <button
          onClick={ () => openRegisterModal() }
          type="button"
          data-testid="common_login__button-register"
        >
          Sign up
        </button>
      </div>
    </section>
  );
}
