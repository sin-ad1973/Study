import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';

// *** ReducerからStore生成 *****************************
const store = createStore(tasksReducer);

render(
    <Provider store={store}>
        <TodoApp />
     </Provider>,
    document.getElementById('root')
)
