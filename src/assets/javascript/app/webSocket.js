var app = app || {};

var webSocket = {};
var ws = new WebSocket("ws://localhost:8100");

webSocket.init = function () {

}

function dispMessage(str) {
    document.getElementById("message").innerHTML = str;
}

ws.onopen = function (event) {
    ws.send('{ "type":"text", "content":"Browser ready."}');
};

ws.onmessage = function (event) {
    var message = JSON.parse(event.data);
    switch (message.type) {
        case "text":
            dispMessage(message.content);
            break;
    }
};

app.webSocket = webSocket;
