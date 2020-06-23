var app = {}

require("./app/design.js")(app);
require("./app/controlPanel.js")(app);
require("./app/canvas.js")(app);
require("./app/webSocket.js")(app);


app.init = function () {
    app.Design.init();
    app.Canvas.init();
    app.controlPanel.init();
    app.webSocket.init();
}


module.exports = app;