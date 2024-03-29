import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from '../../redux/auth';
import s from './LogInForm.module.css';

const LogInForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={s.title}>Log in to your account</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          E-mail
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Your e-mail"
            autoComplete="off"
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Your password"
            autoComplete="off"
          />
        </label>

        <button className={s.submitBtn} type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LogInForm