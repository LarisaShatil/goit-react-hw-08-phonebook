import React from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import TodoList from '../components/TodoList';
// import TodoEditor from '../components/TodoEditor';
import Filter from '../components/Filter/Filter';
// import { todosOperations, todosSelectors } from '../redux/todos';
import { Helmet } from 'react-helmet';
import ContactList from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';

const barStyles = {
  display: 'block',
  alignItems: 'center',
  width: '450px',
  margin: 'auto',
  paddingTop: 20,
};

export default function ContactsView(params) {
  // const dispatch = useDispatch();
  // const isLoadingTodos = useSelector(todosSelectors.getLoading);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const toggleModal = () => setIsModalOpen(state => !state);

  // useEffect(() => {
  //   dispatch(todosOperations.fetchTodos())
  // }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <div style={barStyles}>
        {/* {isLoadingTodos && <h1>Загружаем...</h1>} */}

        <ContactForm />
        <Filter />
      <ContactList />
      </div>


    </>
  );
};