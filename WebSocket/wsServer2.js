const express = require('express');
const app = express();
const enableWs = require('express-ws')(app);

// enableWs(app);

app.use(function (req, res, next) {
    console.log('middleware');
    req.testing = 'testing';
    return next();
});

app.get('/', function(req, res, next){
    console.log('get route', req.testing);
    res.end();
});

app.ws('/test1', (ws, req) => {
    ws.on('message', msg => {
        console.log(msg + '1 : ' + new Date());
        ws.send(msg + '1 : ' + new Date());
    });

    ws.on('close', () => {
        console.log('WebSocket was closed');
    });
});

app.ws('/test2', (ws, req) => {
    ws.on('message', msg => {
        console.log(msg + '2 : ' + new Date());
        ws.send(msg + '2 : ' + new Date());
    });

    ws.on('close', () => {
        console.log('WebSocket was closed');
    });
});

app.listen(5001);
console.log("server start");
