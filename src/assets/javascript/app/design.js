var app = app || {};

var Design = {};

Design.init = function () {
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
    });


    $(document).ready(function () {
        $("#panelControl").load("assets/html/ControlPanel.html");
    });

    var pipsSlider = document.getElementById('slider-pips');

    noUiSlider.create(pipsSlider, {
        range: {
            min: 0,
            max: 100
        },
        start: [50],
        pips: { mode: 'count', values: 5 }
    });

}



app.Design = Design;
