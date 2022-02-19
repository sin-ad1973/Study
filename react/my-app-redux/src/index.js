import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './containers/App';
import tasksReducer from './reducers/tasks';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(
  tasksReducer,
  applyMiddleware(logger, thunk),
);

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
