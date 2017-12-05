import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import notification from './notification';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

//newWordNotification();
