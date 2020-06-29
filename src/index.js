import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import './scss/index.scss';
import getRemotePath from './config';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={getRemotePath()}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
