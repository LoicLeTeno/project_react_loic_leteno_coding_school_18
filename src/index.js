import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './style/app.css'


import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'react-bootstrap/dist/react-bootstrap'

import '@fortawesome/fontawesome-free/js/all'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

