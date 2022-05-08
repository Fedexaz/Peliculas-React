import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './resources/styles/main.css';
import './resources/styles/home.css';
import './resources/styles/favorites.css';
import './resources/styles/loader.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);