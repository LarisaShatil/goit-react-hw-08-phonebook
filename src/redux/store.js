import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import { filterReducer } from './filterSlice';
import { contactsApi } from '../services/contactsApi';

export  const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});