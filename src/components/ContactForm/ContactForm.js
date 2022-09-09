import React from "react";
import s from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useGetContactsQuery, useCreateContactMutation } from '../../services/contactsApi';
import { contactsOperations } from '../../redux/contacts';
import contactsSelectors  from '../../redux/contacts/contacts-selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  // const { data: contacts } = useGetContactsQuery();
  // const [createContact, {isLoading}] = useCreateContactMutation();
 

  //taking data from input
  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };
  
  const checkNewContacts = (data) => {
    const name = data.name.toLowerCase();
    //   const sameContact = contacts.some(contact => contact.name.toLowerCase().includes(name));
    //   if (sameContact) {
    //     return alert(`${data.name} is already in your contacts`)
    // }
    // return true;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const contact = {
      name: name,
      number: number
    };

    dispatch(contactsOperations.addContact(contact));
  
    // if (checkNewContacts(contact)) {
    //   createContact(contact);
    // };

    resetForm();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label
        className={s.label}
        htmlFor="name">👤 Name
        <input
          className={s.input}
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="write the name with the use of letters, apostrophe, dash and spaces. For example, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc"
          placeholder=". . ."
          required
        />
      </label>

      <label
        className={s.label}
        htmlFor="number">☎️ Number
        <input
          className={s.input}
          id="number"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          maxLength="14"
          title="use the numeric format for the phone number"
          placeholder=". . ."
          required
        />
      </label>
      <button
        className={s.addBtn}
        type="submit"
        // disabled={isLoading}
      >
        Add contact
      </button>

    </form>

  )
};