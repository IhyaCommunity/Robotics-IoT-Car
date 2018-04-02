var socket = io('http://192.168.10.100:8083');

var pos = { x: 0, y: 0 };

var manager = nipplejs.create({
    zone: document.getElementById('joy'),
    size: 400,
    mode: 'static',
    color: 'white',
    // restOpacity: 1,
    position: {
        left: '50%',
        right: '50%',
        top: "70%"
    }
});

manager.on('move', (evt, joystick) => {
    var joy = manager.get(0);
    var origin = joy.position;
    var size = joy.options.size;

    pos.x = joystick.position.x - origin.x;
    pos.y = joystick.position.y - origin.y;
    pos.x = pos.x / (size / 2);
    pos.y = pos.y / (size / -2);


});

var sendInterval;
manager.on('start', (evt, joystick) => {
    sendInterval = setInterval(() => {

        console.log(pos);

        socket.emit('update_speed', pos);

    }, 100);
});

manager.on('end', (evt, joystick) => {
    clearInterval(sendInterval);
    socket.emit('update_speed', { x: 0, y: 0 });
});