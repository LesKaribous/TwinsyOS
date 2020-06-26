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
            switch (message.content) {
                case "ServerReady":
                    document.getElementById("led").style.backgroundColor = "green";
                    break;

                default:
                    dispMessage(message.content);
                    break;
            }

            break;
    }
};

app.webSocket = webSocket;
