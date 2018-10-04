import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import 'core-js/fn/array/find-index';
import 'core-js';
import './index.css';
import './media.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
registerServiceWorker();
