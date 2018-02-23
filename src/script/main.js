import dat from 'dat.gui/build/dat.gui.js'
import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../style/reset.scss';
import '../style/main.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Todo from './pages/Todo';

ReactDOM.render(
  <Todo/>,
  document.getElementById('app')
);
