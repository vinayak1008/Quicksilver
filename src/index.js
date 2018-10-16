import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FrontPage from './frontPage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<FrontPage />, document.getElementById('root'));


serviceWorker.unregister();
