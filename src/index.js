import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import AppState from './store/AppState';
import registerServiceWorker from './registerServiceWorker';

var appState = new AppState();
ReactDOM.render(<App appState={appState}/>, document.getElementById('root'));
registerServiceWorker();
