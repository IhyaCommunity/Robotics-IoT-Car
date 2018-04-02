const io = require('socket.io')(8083);
var Raspi = require('raspi-io');
var express = require('express');
var app = express();
var five = require('johnny-five');
var board = new five.Board({
  io: new Raspi()
});

const MAX_SPEED = 255;
const TURNING_SPEED = 120;

var motorLeft, motorRight;
var isBoardReady = false;

board.on('ready', () => {

  initMotors();
  // motorLeft.forward(100);
  isBoardReady = true;

});

app.use('/', express.static('view/index.html'))
app.use('/motion', express.static('view/motion'));
app.use('/joy', express.static('view/joy'));

app.listen(8082, () => console.log('Application listening on port 8082!'));

io.on('connection', function (socket) {

  console.log('connection: ' + socket);

  socket.on('update_speed', function (data) {
    if (data == null || data.x == null || data.y == null) return console.error('Data is null');
    // console.log(data);
    if (isBoardReady !== true) return null;
    speeds = getMotorSpeeds(data.x, data.y);
    driveMotors(speeds.left, speeds.right, motorLeft, motorRight);
  });

  socket.on('motion', function (data) {
    if (data == null || data.x == null || data.y == null) return console.error('Data is null');
    // console.log(data);
    if (isBoardReady !== true) return null;
    speeds = getMotorSpeeds(data.x, data.y);
    driveMotors(speeds.left, speeds.right, motorLeft, motorRight);
  });

});

function initMotors() {

  motorLeft = new five.Motor({
    pins: {
      pwm: 'GPIO13',
      dir: 'GPIO5',
      cdir: 'GPIO6'
    }
  });

  motorRight = new five.Motor({
    pins: {
      pwm: 'GPIO18',
      dir: 'GPIO23',
      cdir: 'GPIO24'
    }
  });

}

function getMotorSpeeds(x, y) {

  var turnDir = Math.sign(x);
  var moveDir = Math.sign(y);

  var mag = Math.sqrt(x * x + y * y) * moveDir;
  var motorLeft = mag * MAX_SPEED;
  var motorRight = mag * MAX_SPEED;

  var speedDiff = moveDir * Math.abs(x) * TURNING_SPEED;

  if (turnDir > 0) {
    motorRight = motorRight - speedDiff;
  }

  else {
    motorLeft = motorLeft - speedDiff;
  }

  return {
    left: motorLeft,
    right: motorRight
  };

}

function driveMotors(speedLeft, speedRight, motorLeft, motorRight) {

  driveMotor(speedLeft, motorLeft);
  driveMotor(speedRight, motorRight);

}

function driveMotor(speed, motor) {

  var dir = Math.sign(speed);
  speed = Math.abs(speed);

  if (speed == 0) {
    console.log("stop");
    motor.stop();
  }
  else if (dir > 0) {
    console.log("forward: " + speed);
    motor.forward(speed);
  }
  else if (dir < 0) {
    console.log("reverse: " + speed);
    motor.reverse(speed);
  }

}