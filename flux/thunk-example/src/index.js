import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// *** ReducerからStore生成 *****************************
const middleWares = [logger, thunk];
const store = createStore(
    tasksReducer,
    applyMiddleware(...middleWares)
);

render(
    <Provider store={store}>
        <TodoApp />
     </Provider>,
    document.getElementById('root')
)
