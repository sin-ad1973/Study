import { createStore } from 'redux';
import { render } from 'react-dom';
import React from 'react';

const initialState = {
    task: '',
    tasks: [],
};

// *** Reducer定義 **************************************
function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case 'INPUT_TASK':
            return {
                ...state,
                task: action.payload.task,
            };
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task]),
            };
        default:
            return state;
    }
}

// *** ReducerからStore生成 *****************************
const store = createStore(tasksReducer);
// console.log(store);

// 検証用
// function handleChange() {
//     console.log(store.getState());
// }

// 検証用
// stateの変化を監視し、コールバック関数を呼ぶ
// const unsubscribe = store.subscribe(handleChange);
// 下記メソッドを呼ぶと監視が解除される
// unsubscribe();

// *** ActionCreator定義 *******************************
const inputTask = (task) => ({
    type: 'INPUT_TASK',
    payload: {
        task,
    }
});
const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: {
        task,
    }
});

// *** View定義 ***************************************
function TodoApp({ store }) {
    const { task, tasks } = store.getState();
    return (
        <div>
            <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))} />
            <input type="button" value='add' onClick={() => store.dispatch(addTask(task))} />
            <ul>
                {
                    tasks.map(function(item, i) {
                        return (
                            <li key={i}>{item}</li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

function renderApp(store) {
    render(
        <TodoApp store={store} />,
        document.getElementById('root')
    )
}
store.subscribe(() => renderApp(store));
renderApp(store);

// 検証用
// Action発行
// store.dispatch(addTask('Storeを学ぶ'));
