import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './src/model/store';

import App from './src/App';

const store = configureStore();

const WithProvider = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<WithProvider store={store} />, rootElement);
