var app = {}

app.init = function () {
    app.Design.init();
    app.Canvas.init();
    app.controlPanel.init();
    app.webSocket.init();
}
