import React, { useContext, useState } from 'react';
import { requestLogin } from '../../API/requests';
import ToDoContext from '../../context/ToDoContext';
import '../ModalComponents.css';

export default function RegisterModal() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);

  const {
    setOpenedModalType,
    setIsSomeModalOpen,
    closeModal,
    login,
  } = useContext(ToDoContext);

  const validateFields = () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!emailRegex.test(email) || !terms) {
      setError(true);
    } else if (password !== confirmPassword) {
      setError(true);
    } else setError(false);
  };

  const handleRegister = async () => {
    await validateFields();
    if (!error) {
      requestLogin('/user/register', { firstName, lastName, email, password })
        .then((data) => {
          login(data);
        })
        .catch(() => setError(true));
    }
  };

  const openLoginModal = () => {
    setOpenedModalType('login');
    setIsSomeModalOpen(true);
  };

  return (
    <section className="register_component">
      <div
        className="close_btn"
        role="button"
        onClick={ closeModal }
        onKeyPress={ closeModal }
        tabIndex={ 0 }
      >
        X

      </div>
      <h2 className="modal_title">Create an account</h2>

      <form className="modal_form">

        <div className="inputs_inline">
          <label
            htmlFor="firstName"
            className="modal_inputs"
          >
            First Name
            <input
              className="input"
              type="text"
              placeholder="Enter Your First Name"
              value={ firstName }
              onChange={ ({ target: { value } }) => setFirstName(value) }
            />
          </label>
          <label className="modal_inputs" htmlFor="lastName">
            Last Name
            <input
              type="text"
              className="input"
              placeholder="Enter Your Last Name"
              value={ lastName }
              onChange={ ({ target: { value } }) => setLastName(value) }
            />
          </label>
        </div>

        <label className="modal_inputs" htmlFor="email">
          Email address
          <input
            className="input"
            type="email"
            placeholder="Enter Your E-mail"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>

        <div className="inputs_inline">
          <label className="modal_inputs" htmlFor="password">
            Password
            <input
              className="input"
              type="password"
              placeholder="Enter Your Password"
              value={ password }
              onChange={ ({ target: { value } }) => setPassword(value) }
            />
          </label>
          <label className="modal_inputs" htmlFor="confirmPassword">
            Confirm Password
            <input
              className="input"
              type="password"
              placeholder="Enter Your Password"
              value={ confirmPassword }
              onChange={ ({ target: { value } }) => setConfirmPassword(value) }
            />
          </label>
        </div>

        <label className="btn_remember" htmlFor="terms">
          <input
            type="checkbox"
            checked={ terms }
            onChange={ () => setTerms(!terms) }
          />
          By registering your details,
          you agree with our Terms & Conditions, Privacy and Cookies Policy
        </label>
      </form>

      <button
        className="btn_modal"
        type="submit"
        onClick={ handleRegister }
      >
        Create Account
      </button>

      <div className="span_modal">
        <p>Already have an account?</p>
        <div
          onClick={ () => openLoginModal() }
          role="button"
          data-testid="common_login__button-login"
          onKeyPress={ openLoginModal }
          tabIndex={ 0 }
          className="sign_btn"
        >
          Sign in
        </div>
      </div>

      {error && (
        <p
          className="error_msg"
        >
          *You cannot proceed without these informations
        </p>)}

    </section>
  );
}
