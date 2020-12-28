import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {GlobalProvider} from './context/GlobalContext'

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


