import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home/Home';
import  './style/reset.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
