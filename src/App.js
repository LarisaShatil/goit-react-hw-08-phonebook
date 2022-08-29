import s from './App.module.css';

import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

import ContactList from './components/ContactList/ContactList';

const App = () => {
  return (
    <div className={s.App}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
       <h2>Contacts</h2>
      <Filter />
      {/* { contactsList.length > 0 && <ContactList />
      } */}
      <ContactList />
    </div>
  )
};

export default App;