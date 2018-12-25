import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';
import logger from 'redux-logger';

// *** ReducerからStore生成(localstorage保存middleware) *****************************
const storageMiddleware = store => next => action => {
    const result = next(action);
    window.localStorage.setItem('app-state', JSON.stringify(store.getState()));
    return result;
}
const savedSate = JSON.parse(localStorage.getItem('app-state'));
const store = createStore(
    tasksReducer,
    savedSate ? savedSate : tasksReducer(undefined, { type: 'INIT'}),
    applyMiddleware(storageMiddleware)
);

render(
    <Provider store={store}>
        <TodoApp />
     </Provider>,
    document.getElementById('root')
)
