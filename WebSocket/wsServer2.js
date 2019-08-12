// WebSocket Server (routing)
const express = require('express');
const app = express();
const enableWs = require('express-ws')(app);

app.use(function (req, res, next) {
    console.log('middleware');
    req.testing = 'testing';
    return next();
});

app.get('/', function(req, res, next){
    console.log('get route', req.testing);
    res.end();
});

var connects1 = [];
app.ws('/test1', (ws, req) => {
    connects1.push(ws);

    ws.on('message', msg => {
        var message = msg + '1 : ' + new Date();

        connects1.forEach(socket => {
            socket.send(message);
        });
        // ws.send(message);
    });

    ws.on('close', () => {
        connects1.filter(socket => {
            return (socket == ws) ? false : true;
        });
        console.log('WebSocket was closed');
    });
});

var connects2 = [];
app.ws('/test2', (ws, req) => {
    connects2.push(ws);

    ws.on('message', msg => {
        var message = msg + '2 : ' + new Date();

        connects2.forEach(socket => {
            socket.send(message);
        });
    });

    ws.on('close', () => {
        connects2.filter(socket => {
            return (socket == ws) ? false : true;
        })
        console.log('WebSocket was closed');
    });
});

app.listen(5001);
console.log("server start");
