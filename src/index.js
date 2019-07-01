import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/pages/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from './config/firebase/';

console.log(firebase);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
