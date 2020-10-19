import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import { BaseApp } from './baseApp/BaseApp';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
		<BaseApp/>
	</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
