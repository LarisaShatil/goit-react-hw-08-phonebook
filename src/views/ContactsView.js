import React from "react";
import Filter from '../components/Filter/Filter';
import { Helmet } from 'react-helmet';
import ContactList from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { useSelector } from "react-redux";
import { contactsSelectors } from "../redux/contacts";
import { Spinner } from "../components/Spinner/Spinner";

const container = {
  display: 'block',
  alignItems: 'center',
  margin: 'auto',
  padding: '2rem 2rem 0',
};

export default function ContactsView() {
  const isLoading = useSelector(contactsSelectors.getLoading);
  

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <div style={container}>
        {isLoading && <Spinner />}

        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </>
  );
};