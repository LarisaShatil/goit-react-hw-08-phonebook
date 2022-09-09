import React, { useEffect } from 'react';
import s from './ContactList.module.css';
import { getFilterValue } from '../../redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner } from '../Spinner/Spinner';
import { NotFound } from '../NotFound/NotFound';
import {  contactsSelectors } from '../../redux/contacts';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { ContactItem } from '../ContactItem.js/ContactItem';

  
const ContactList = () => {
  const dispatch = useDispatch();
  // const onDeleteButton = id => dispatch(contactsOperations.deleteContact(id));

 useEffect(() => {
      dispatch(contactsOperations.fetchContacts());
 }, [dispatch]);
  
  const contacts = useSelector(contactsSelectors.getContacts);
  console.log('ContactList', contacts);
  // const filterName = useSelector(getFilterValue).toLowerCase();
  // // 2) const filterName = useSelector(state => state.filter);

  // let visibleContacts = !filterName ? contacts :
  //   contacts.filter(contact => contact.name.toLowerCase().includes(filterName));
  // const contacts = useSelector(contactsSelectors.getVisibleContacts);


  return (
    <>
        <h1>Contact List</h1>
      {/* {isFetching && <Spinner />}
      {isError && <NotFound/>}
      {contacts && <ul className={s.list}>{visibleContacts.map(contact =>
        <ContactItem key={contact.id} {...contact}   />
      )}
      </ul>} */}
     <ul className={s.list}>{contacts.map(({id,name,number}) =>
       <ContactItem key={id} id={id} name={name} number={number}  />
      )}
      </ul>
    </>

  )
};

export default ContactList;