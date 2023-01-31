import React, { useContext, useState } from 'react';
import { requestLogin } from '../../API/requests';
import ToDoContext from '../../context/ToDoContext';

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
    <section>
      <button type="button" onClick={ closeModal }>X</button>
      <h2>Create an account</h2>
      <form>
        <div>
          <label htmlFor="firstName">
            First Name
            <input
              type="text"
              placeholder="Enter Your First Name"
              value={ firstName }
              onChange={ ({ target: { value } }) => setFirstName(value) }
            />
          </label>
          <label htmlFor="lastName">
            Last Name
            <input
              type="text"
              placeholder="Enter Your Last Name"
              value={ lastName }
              onChange={ ({ target: { value } }) => setLastName(value) }
            />
          </label>
        </div>

        <label htmlFor="email">
          Email address
          <input
            type="email"
            placeholder="Enter Your E-mail"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>

        <div>
          <label htmlFor="password">
            Password
            <input
              type="password"
              placeholder="Enter Your Password"
              value={ password }
              onChange={ ({ target: { value } }) => setPassword(value) }
            />
          </label>
          <label htmlFor="confirmPassword">
            Confirm Password
            <input
              type="password"
              placeholder="Enter Your Password"
              value={ confirmPassword }
              onChange={ ({ target: { value } }) => setConfirmPassword(value) }
            />
          </label>
        </div>

        <label htmlFor="terms">
          <input
            type="checkbox"
            checked={ terms }
            onChange={ () => setTerms(!terms) }
          />
          By registering your details,
          you agree with our Terms & Conditions, Privacy and Cookies Policy
        </label>
      </form>

      <button type="submit" onClick={ handleRegister }>Create Account</button>

      {error && <p>*You cannot proceed without these informations</p>}

      <div>
        <p>Already have an account?</p>
        <button
          onClick={ () => openLoginModal() }
          type="button"
          data-testid="common_login__button-login"
        >
          Sign in
        </button>
      </div>

    </section>
  );
}
