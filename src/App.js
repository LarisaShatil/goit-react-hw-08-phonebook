import React from "react";
import { useDispatch } from 'react-redux';
// import { authOperations } from './redux/auth';
import authOperations from './redux/auth/auth-operations'
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ContactsView from './views/ContactsView';
import { useEffect } from 'react';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
          <Routes>
        <Route exact path="/" element={<Layout/>}>
          <Route index element={<HomeView />} />
          <Route path="/register" element={<RegisterView/>} />
          <Route path="/login" element={<LoginView/>} />
          <Route path="/contacts" element={<ContactsView/>} />
        </Route>
      </Routes>
  )
};

export default App;