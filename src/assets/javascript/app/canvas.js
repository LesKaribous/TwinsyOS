module.exports = function (app) {
    var canvas = {}

    canvas.init() = function () {
        displayBoard();
    }

    function displayBoard() {
        var canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            base_image = new Image();
            base_image.src = 'img/map.svg';

            base_image.onload = function () {
                ctx.drawImage(base_image, 0, 0, canvas.width, canvas.height);
            }
        }
    }

    app.canvas = canvas;
}