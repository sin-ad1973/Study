import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const serverNowString = document.getElementById('server-now').getAttribute('data-server-now');
const now = new Date(parseInt(serverNowString, 10));

// React v15以前
// ReactDOM.render(

// React v16以降
ReactDOM.hydrate(
    <App renderedAt={now} />,
    document.getElementById('root')
);
