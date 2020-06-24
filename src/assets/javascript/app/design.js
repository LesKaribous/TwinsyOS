var app = app || {};

var Design = {};

Design.init = function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    $("#panelControl").load("assets/html/ControlPanel.html", function () {
        app.controlPanel.init();
    });
}


app.Design = Design;
