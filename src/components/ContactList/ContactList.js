import React, { useEffect, useState } from 'react';
import s from './ContactList.module.css';
import { getFilterValue } from '../../redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from '../Spinner/Spinner';
import { NotFound } from '../NotFound/NotFound';
import {  contactsSelectors } from '../../redux/contacts';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { ContactItem } from '../ContactItem.js/ContactItem';

  
const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

 useEffect(() => {
   dispatch(contactsOperations.fetchContacts());
 }, [dispatch]);
  


  console.log('contacts: ', contacts, 'filterValue : ', filterValue.value, filterValue.value === '');
  
  const getFilteredContacts = (filterValue.value === '') ? contacts
    : [...contacts].filter(contact => contact.name.toLowerCase().includes(filterValue));
  console.log(getFilteredContacts)
  
      //   {/* {isFetching && <Spinner />}
      // {isError && <NotFound/>}
      // {contacts && <ul className={s.list}>{visibleContacts.map(contact =>
      //   <ContactItem key={contact.id} {...contact}   />
      // )}
      // </ul>} */}

  return (
    <>

      {(getFilteredContacts.length) ?
        (<>
          <h1>Contact List</h1>
          <ul className={s.list}>
          {getFilteredContacts.map(({ id, name, number }) =>
            <ContactItem key={id} id={id} name={name} number={number} />)}
          </ul>
          </>)
      : (<h1>No contacts</h1>)}

    </>

  )
};

export default ContactList;