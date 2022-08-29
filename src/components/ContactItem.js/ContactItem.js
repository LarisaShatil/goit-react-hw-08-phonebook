import React from 'react';
import { useDeleteContactMutation } from '../../services/contactsApi';
import s from './ContactItem.module.css';

export const ContactItem = ({name, number, id} ) => {
  const [deleteContact, {isLoading: isDeleting}] = useDeleteContactMutation();
 
  return (
    <li className={s.item}>
      <p className={s.text}>{name}</p>
      <p className={s.text}>{number}</p>
      <button
        className={s.deleteBtn}
        type="button"
        id={id}
      onClick={() => deleteContact(id)}
      >{ isDeleting ? 'Deleting...' : 'Delete ❌'}</button>
    </li>
  )
};