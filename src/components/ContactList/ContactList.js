import React from 'react';
import s from './ContactList.module.css';

import { getFilterValue } from '../../redux/filterSlice';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../services/contactsApi';

import { ContactItem } from '../ContactItem.js/ContactItem';
import { Spinner } from '../Spinner/Spinner';
import { NotFound } from '../NotFound/NotFound';

  
const ContactList = () => {
  const { data: contacts, isFetching, isError } = useGetContactsQuery();
  const filterName = useSelector(getFilterValue).toLowerCase();
  // 2) const filterName = useSelector(state => state.filter);

  let visibleContacts = !filterName ? contacts :
    contacts.filter(contact => contact.name.toLowerCase().includes(filterName));

  return (
    <>
      {isFetching && <Spinner />}
      {isError && <NotFound/>}
      {contacts && <ul className={s.list}>{visibleContacts.map(contact =>
        <ContactItem key={contact.id} {...contact}   />
      )}
      </ul>}
    </>

  )
};

export default ContactList;