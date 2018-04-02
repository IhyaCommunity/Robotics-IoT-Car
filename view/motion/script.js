var socket = io('http://192.168.10.100:8083');

var sensitivity = -2.2;
var sendInterval;
var accX = 0, accY = 0;

window.ondevicemotion = (event) => {

    accX = event.accelerationIncludingGravity.x / 10;
    accY = event.accelerationIncludingGravity.y / 10;
}

setInterval(() => {

    var Motion = {
        x: accX * sensitivity,
        y: accY * sensitivity
    }

    if (Math.abs(Motion.x) > 1) Motion.x = 1 * Math.sign(Motion.x);
    if (Math.abs(Motion.y) > 1) Motion.y = 1 * Math.sign(Motion.y);

    // console.log(Motion);
    socket.emit('motion', Motion);

    document.getElementById("x-axis").innerText = "X : " + Motion.x.toFixed(2);
    document.getElementById("y-axis").innerText = "Y : " + Motion.y.toFixed(2);
}, 100);
