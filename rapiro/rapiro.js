var Cylon = require('cylon');
var server = require('./server');

// Initialize the robot
Cylon.robot({
  connection: { name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyAMA0' },
  device: {name: 'rapiro', driver: 'rapiro'},

  work: function(my) {
    my['doneWalking'] = false ;

    console.log("forward");

    every(1..second(), function() {
      if (my['doneWalking'] == false) {
        my.rapiro.forward();
      }
    });
    after(10..seconds(), function() {
      console.log("halt");
      my.rapiro.stop();
      my['doneWalking'] = true;
    });

  }
}).start();

// Start the server
server.start();
