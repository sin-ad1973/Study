import React from 'react';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
// import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';
import Error from './components/Error';
// 自作したcreateStore
import createStore from './store';

// *** ReducerからStore生成 *****************************
// const store = createStore(tasksReducer);
const history = createBrowserHistory();
const store = createStore(history);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                {/* ルーティング */}
                <Route exact path="/" component={TodoApp} />
                <Route exact path="/error" component={Error} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
