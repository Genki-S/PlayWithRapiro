PlayWithRapiro
==============

Playing around with Rapiro

## Getting Started

- Buy [Rapiro](http://www.rapiro.com/)
- Buy [Raspberry Pi Model B](http://www.raspberrypi.org/products/model-b/)
- Install [Raspbian](http://www.raspbian.org/)
- Install node and npm on Raspberry Pi
  ref: [Install Node on the Raspberry Pi in 5 minutes](http://joshondesign.com/2013/10/23/noderpi) (might be a little out of date)
  ```
  wget http://nodejs.org/dist/v0.10.2/node-v0.10.2-linux-arm-pi.tar.gz
  tar -xvzf node-v0.10.2-linux-arm-pi.tar.gz
  ```
- Get started with [Cylon.js](http://cylonjs.com/)
- Get started with [Rapiro with Cylon.js](http://cylonjs.com/documentation/platforms/rapiro/)

## Make Rapiro walk!

- SSH into Raspberry Pi
- Get sample code from [hybridgroup/cylon-rapiro](https://github.com/hybridgroup/cylon-rapiro)
- Change '/dev/ttyUSB0' to '/dev/ttyAMA0' (use [Gort](http://gort.io/) to be sure)
- Run the sample code `$ node sample.js`
- If you get the error `Serialport not open`, just wait. It disappeared in my case :)
- Rapiro will walk!
- TODO: Our Rapiro doesn't stop...
  ```
  TypeError: undefined is not a function
      at Driver.halt (/home/pi/rapiro/node_modules/cylon-rapiro/lib/driver.js:33:3)
      at Device.halt (/home/pi/rapiro/node_modules/cylon/lib/device.js:85:15)
      at null._onTimeout (/home/pi/rapiro/rapiro.js:21:17)
      at Timer.listOnTimeout [as ontimeout] (timers.js:110:15)
  ```
