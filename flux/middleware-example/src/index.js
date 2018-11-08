import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';
import logger from 'redux-logger';

// *** ReducerからStore生成(middleware適用) *****************************
// const store = createStore(
//     tasksReducer,
//     applyMiddleware(logger)
// );

// *** middleware呼び出し検証 *******************************************
// const middleware1 = store => next => action => {
//     // middleware1
//     console.log(next);
//     return next(action);
// }
// const middleware2 = store => next => action => {
//     // middleware2
//     console.log(next);
//     return next(action);
// }
// const middleware3 = store => next => action => {
//     // middleware3
//     console.log(next);
//     return next(action);
// }
// const store = createStore(
//     tasksReducer,
//     applyMiddleware(
//         middleware1,
//         middleware2,
//         middleware3
//     )
// );

// *** log middleware独自実装 ******************************************
const middleware = store => next => action => {
    // action適用前のstateを表示
    console.log(store.getState());
    console.log(action);

    const result = next(action);

    // action適用後のstateを表示
    console.log(store.getState());
    console.log('------------------');

    // 特別な値をreturnする必要は無いのでresultをそのまま返却
    return result;
}
const store = createStore(
    tasksReducer,
    applyMiddleware(middleware)
);

render(
    <Provider store={store}>
        <TodoApp />
     </Provider>,
    document.getElementById('root')
)
