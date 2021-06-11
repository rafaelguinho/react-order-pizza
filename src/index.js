import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { registerMicroApps, start } from 'qiankun';

// registerMicroApps([
//   {
//     name: 'react app', // app name registered
//     entry: '//localhost:7200',
//     container: '#yourContainer',
//     activeRule: '/insured',
//   }
// ]);

start();
ReactDOM.render(
  <React.StrictMode>
    <App />
    <div id="yourContainer" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
