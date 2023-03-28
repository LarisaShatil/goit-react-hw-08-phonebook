import React from 'react';
import ReactDOM from 'react-dom';

//REDUX
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './App.module.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename='/goit-react-hw-08-phonebook'>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

