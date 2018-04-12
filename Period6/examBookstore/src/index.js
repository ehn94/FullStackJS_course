import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import RouterComponent from './RouterComponent';
import bookStore from "./database/models/bookStore";


ReactDOM.render(
  <RouterComponent bookStore={bookStore}  />,
  document.getElementById('root')
);
