import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import App from './App';
import createStore from './store/createStore';

const history = createBrowserHistory();
// Storeの生成
const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
        {/*
            Linkコンポーネントなどが動作するように
            react-router-domのRouterではなく
            react-router-reduxのConnectedRouterを使う
        */}
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
