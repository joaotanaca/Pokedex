import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './pages/Home/App';
import store from './store';
import Global from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
