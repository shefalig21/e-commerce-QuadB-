import React from 'eact';
import ReactDOM from 'eact-dom';
import { Provider } from 'eact-redux';
import { createStore, combineReducers } from 'edux';
import App from './App';
import reducers from './reducers';

const store = createStore(combineReducers(reducers));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);