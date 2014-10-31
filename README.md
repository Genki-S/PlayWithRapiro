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
- Buy [ACAdapter](http://wiki.rapiro.com/page/ac-adaptor_ja/)

## Configure Wireless Network on Raspberry Pi

- Follow instruction here (Japanese): [Raspberry Piを無線LAN化 - ぱせらんメモ](http://d.hatena.ne.jp/pasela/20121224/raspi_wlan)

## Make Rapiro walk!

- SSH into Raspberry Pi
- Get sample code from [hybridgroup/cylon-rapiro](https://github.com/hybridgroup/cylon-rapiro)
- Change '/dev/ttyUSB0' to '/dev/ttyAMA0' (use [Gort](http://gort.io/) to be sure)
- Run the sample code `$ node sample.js`
- If you get the error `Serialport not open`, just wait. It disappeared in my case :)
- Rapiro will walk!

## Trouble Shooting
- Servo motor cannot return initial position when Rapiro turns on
  - Check the battery fully charged.
- Can't connect SSH into Raspberry Pi
  - Have you connected soon from Raspberry Pi turned on? Please wait abont 1 minute.

## API
See [here](http://cylonjs.com/documentation/drivers/rapiro/).

## Setup

### Rapiro

- SSH into Raspberry Pi
- in `rapiro` directory, run `$ node rapiro.js`

### User

- Use [Zsh](http://www.zsh.org/)
- Source [`setup.zsh`](https://github.com/Genki-S/PlayWithRapiro/blob/master/user/setup.zsh)
- Play around with some commands

## Development

### Deploy

- SSH innto Raspberry Pi
- Add your ssh public key to `~/.ssh/authorized_keys`
- From your host in project directory, `$ gulp rsync`
