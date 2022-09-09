import React from 'react';
import { contactsOperations } from '../../redux/contacts';
import { useDispatch, useSelector } from 'react-redux';
// import { useDeleteContactMutation } from '../../services/contactsApi';
import s from './ContactItem.module.css';

export function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const onDelete = id => dispatch(contactsOperations.deleteContact(id));

 
  return (
    <li className={s.item}>
      <p className={s.text}>{name}</p>
      <p className={s.text}>{number}</p>
      <button
        className={s.deleteBtn}
        type="button"
        id={id}
      onClick={() =>onDelete(id)}
      >Delete ❌
        {/* {isDeleting ? 'Deleting...' : 'Delete ❌'} */}
      </button>
    </li>
  )
};