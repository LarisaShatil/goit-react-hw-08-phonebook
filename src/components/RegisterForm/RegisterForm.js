import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from "react-hot-toast";

import { authOperations } from '../../redux/auth';
import s from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return;
    } else {
      dispatch(authOperations.register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    }
  };
  return (
    <>
      <h1 className={s.title}>Create your account</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">

        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text" name="name"
            value={name}
            placeholder="Your name"
            onChange={handleChange} />
        </label>

        <label className={s.label}>
          E-mail
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            placeholder="Your e-mail"
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            placeholder="Minimum 8 characters"
            onChange={handleChange}
            autoComplete="off"
          />
        </label>

        <button className={s.submitBtn} type="submit">Sign in</button>
      </form>
    </>
  )
}

export default RegisterForm;