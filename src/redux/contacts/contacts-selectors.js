import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.isLoading;

const getFilter = state => state.contacts.filter;

const getContacts = state => state.contacts.contacts;

// const getTotalTodoCount = state => {
//   const contacts = getAllTodos(state);
//   return contacts.length;
// };

// const getCompletedTodoCount = createSelector([getAllTodos], contacts => {
//   return contacts.reduce((total, contact) => (contact.completed ? total + 1 : total), 0);
// });

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ description }) =>
      description.toLowerCase().includes(normalizedFilter),
    );
  },
);

const contactsSelectors = {
  getLoading,
  getFilter,
  getContacts,
  getVisibleContacts,
};

export default contactsSelectors;