var app = app || {};

var controlPanel = {}

controlPanel.init = function () {
    controlPanel.initSliders();

}

controlPanel.initSliders = function () {
    var slider1 = document.getElementById('slider1');
    var slider2 = document.getElementById('slider2');
    var slider3 = document.getElementById('slider3');
    var slider4 = document.getElementById('slider4');

    noUiSlider.create(slider1, {
        range: {
            min: 0,
            max: 120
        },
        start: [60]
    });

    noUiSlider.create(slider2, {
        range: {
            min: 0,
            max: 120
        },
        start: [60]
    });

    noUiSlider.create(slider3, {
        range: {
            min: 0,
            max: 120
        },
        start: [60]
    });

    noUiSlider.create(slider4, {
        range: {
            min: 0,
            max: 120
        },
        start: [60]
    });

    var slider1Value = document.getElementById("servoPotValue1");
    var slider2Value = document.getElementById("servoPotValue2");
    var slider3Value = document.getElementById("servoPotValue3");
    var slider4Value = document.getElementById("servoPotValue4");


    slider1.noUiSlider.on("update", function (values, handle) {
        slider1Value.innerHTML = values[handle]
    });

    slider2.noUiSlider.on("update", function (values, handle) {
        slider2Value.innerHTML = values[handle]
    });

    slider3.noUiSlider.on("update", function (values, handle) {
        slider3Value.innerHTML = values[handle]
    });

    slider4.noUiSlider.on("update", function (values, handle) {
        slider4Value.innerHTML = values[handle]
    });
}




app.controlPanel = controlPanel;
