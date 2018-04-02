# Robotics & IoT
## Joystick and Accelerometer Controlled Car 💡
Joystick and Accelerometer controlled Car with a camera and livestream using Raspberry Pi, Node.js and Johnny-Five. This demo originally presented at the Robotics &amp; IoT Workshop.

### Follow these steps to run the project

1) Copy and paste this folder to Raspberry Pi using VNC Server (TigerVNC Viewer), or download the source code directly using Chromium web browser in Raspberry Pi.

2) If not already installed, install Node.js in Raspberry Pi using the command below:

    `curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -`
    
    `sudo apt install -y nodejs`

3) In Raspberry Pi Terminal, move to the directory which contains these code files

    `cd <path to your directory>`
    e.g
    `cd /home/pi/Desktop/Robotics-IoT-Car`


4) Install the required packages mentioned in `package.json` file using the command:

    `npm install`

5) Run the script

    `sudo $(which node) car.js`


If everything works fine, it should create a folder named `node_modules` in the project directory.

Note: It is recommended to install node modules (packages) for each project separately in the project directory.

Good Luck! 👍


### Resources


**Workshop Slides**

https://slides.com/skyimpel/iot-robotics-workshop-6# 


**Raspbian**

The most popular and officially supported operating system for Raspberry Pi. A beginner should start with the desktop version of Raspbian.

[https://www.raspberrypi.org/downloads/raspbian/](https://www.raspberrypi.org/downloads/raspbian/)


**TigerVNC Viewer**

A VNC server and client software for remote desktop sharing.

[https://bintray.com/tigervnc/stable/tigervnc](https://bintray.com/tigervnc/stable/tigervnc)


**Etcher**

A tool for burning Raspbian image on SD card.

[https://etcher.io/](https://etcher.io/)


**Johnny-Five**

A Node.js based Robotics and IoT framework.

[http://johnny-five.io/](http://johnny-five.io/)


**Socket.js**

A library used for asynchronous, two-way and real-time communication between client and server.

[https://socket.io/](https://socket.io/)


**Express.js**

Express.js, or simply Express, is a web application framework for Node.js

[https://expressjs.com/](https://expressjs.com/)


**L298 Motor Driver Shield**

 A motor driver kit containing 2 H-bridges for controlling direction of two motors.

[http://hallroad.org/product/l298-h-bridge-module-motor-driver-module-in-pakistan/](http://hallroad.org/product/l298-h-bridge-module-motor-driver-module-in-pakistan/)

[https://www.bananarobotics.com/shop/How-to-use-the-L298N-Dual-H-Bridge-Motor-Driver](https://www.bananarobotics.com/shop/How-to-use-the-L298N-Dual-H-Bridge-Motor-Driver)


**Car Chasis and Tyres + Motors**

[https://hallroad.org/product/2wd-smart-robot-car-chassis-kit/](https://hallroad.org/product/2wd-smart-robot-car-chassis-kit/)


**Four Channel Relay Circuit**

It can be used to control large appliances through Raspberry Pi.

[https://hallroad.org/product/four-channel-relay-module-in-pakistan/](https://hallroad.org/product/four-channel-relay-module-in-pakistan/)


Note: The links for [hallroad.org](https://hallroad.org/) are provided just for reference purpose. You may buy the stuff on any other site or buy physically at number of shops in [Hall Road](https://www.openstreetmap.org/#map=17/31.56402/74.31749) or an electronics market/store of your choice.