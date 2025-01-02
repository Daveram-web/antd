import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pagination from './Pagination';
import Selection from './Selection';
import CRUD from './CRUD';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Selection /> */}
    <CRUD />
  </React.StrictMode>
);

