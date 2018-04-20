import React from 'react';
import ReactDOM from 'react-dom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import  './style/reset.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
