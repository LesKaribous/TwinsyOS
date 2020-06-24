var express = require('express');
var app = express();
const open = require('open');
var path = require('path')

app.use(express.static('src/'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(3000, function () {
    console.log('Simulator running on port 3000');
});

open('http://localhost:3000', { app: 'chrome' });


var WebSocketServer = require("ws").Server;
var ws = new WebSocketServer({ port: 8100 });

console.log("Server started...");

ws.on('connection', function (ws) {
    console.log("Browser connected online...")

    ws.on("message", function (str) {
        var ob = JSON.parse(str);
        switch (ob.type) {
            case 'text':
                console.log("Received: " + ob.content)
                ws.send('{ "type":"text", "content":"Server ready."}')
                break;
        }
    })

    ws.on("close", function () {
        console.log("Browser gone.")
    })
});
