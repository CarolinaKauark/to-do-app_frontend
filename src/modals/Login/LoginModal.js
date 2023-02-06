import React, { useContext, useState } from 'react';
import { requestLogin } from '../../API/requests';
import ToDoContext from '../../context/ToDoContext';
import '../ModalComponents.css';

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
    <section className="login_component">
      <div
        className="close_btn"
        role="button"
        onClick={ closeModal }
        onKeyPress={ closeModal }
        tabIndex={ 0 }
      >
        X

      </div>
      <h2 className="modal_title">Login to Use the App</h2>
      <form className="modal_form">
        <label
          htmlFor="email"
          className="modal_inputs"
        >
          Email address
          <input
            type="email"
            className="input"
            placeholder="Enter Your E-mail"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>

        <label
          htmlFor="password"
          className="login_inputs"
        >
          Password
          <input
            type="password"
            className="input"
            placeholder="Enter Your Password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
        <label className="btn_remember" htmlFor="rememberMe">
          <input
            className="checkmark"
            type="checkbox"
            checked={ rememberMe }
            onChange={ () => setRememberMe(!rememberMe) }
          />
          Remember Me
        </label>
      </form>
      <button
        className="btn_modal"
        type="submit"
        onClick={ handleLogin }
      >
        Login
      </button>
      {error && <p className="error_msg">Unable to login</p>}
      <div className="span_modal">
        <p>Don´t have an account?</p>
        <div
          onClick={ () => openRegisterModal() }
          role="button"
          onKeyPress={ openRegisterModal }
          tabIndex={ 0 }
          className="sign_btn"
        >
          Sign up
        </div>
      </div>
    </section>
  );
}
