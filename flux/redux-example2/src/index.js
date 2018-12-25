import { createStore } from 'redux';
import { render } from 'react-dom';
import React from 'react';
import TodoApp from './components/TodoApp';
import tasksReducer from './reducers/tasks';


// *** ReducerからStore生成 *****************************
const store = createStore(tasksReducer);
// console.log(store);

// 検証用
// function handleChange() {
//     console.log(store.getState());
// }

function renderApp(store) {
    render(
        <TodoApp store={store} />,
        document.getElementById('root')
    )
}
// stateの変化を監視し、コールバック関数を呼ぶ
store.subscribe(() => renderApp(store));
renderApp(store);
