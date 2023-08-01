import React from 'react';
import { contactsOperations } from '../../redux/contacts';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import s from './ContactItem.module.css';
import FlexContainer from '../FlexContainer/FlexContainer';

export function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const onDelete = id => {
    toast.success(`The ${name} was deleted!`)
    return dispatch(contactsOperations.deleteContact(id))
  };

  return (
    <li className={s.item}>
      <FlexContainer style={{ width: '100%' }}>
        <p className={s.text +' '+ s.text_name}>{name}</p>
        <p className={s.text}>{number}</p>
        <button
          className={s.deleteBtn}
          type="button"
          id={id}
          onClick={() => onDelete(id)}
        >❌
        </button>
      </FlexContainer>
    </li>
  )
};