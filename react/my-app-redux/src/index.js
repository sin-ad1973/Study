import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './containers/App';
import tasksReducer from './reducers/tasks';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(tasksReducer);

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
