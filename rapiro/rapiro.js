var Cylon = require('cylon');
var server = require('./server');

// Initialize the robot
Cylon.robot({
  connection: { name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyAMA0' },
  device: {name: 'rapiro', driver: 'rapiro'},

  work: function(my) {
    my['halt'] = false;
    my['failureCount'] = 0;

    every(1..second(), function() {
      if (my['halt']) {
        return;
      }

      if (my['failureCount'] < server.getRequestCount()) {
        my['failureCount'] = server.getRequestCount()
        my.rapiro.unhappy();
      } else {
        my.rapiro.stop();
      }
    });
    after(30..seconds(), function() {
      console.log("halt");
      my.rapiro.stop();
      my['halt'] = true;
    });

  }
}).start();

// Start the server
server.start();
