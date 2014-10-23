var Cylon = require('cylon');

// Initialize the robot
Cylon.robot({
  connection: { name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyAMA0' },
  device: { name: 'rapiro', driver: 'rapiro' },

  work: function(my) {
    my['doneWalking'] = false;
    var on = false;
    var unhappy = false;
    var happy = false;
    var concerned = false;
    var mad = false;

    console.log("forward");

    every((3).seconds(), function() {
/*      if (my['doneWalking'] == false && on == false) {
        my.rapiro.led(0,0,0);
  on = true;
      }
      else if(my['doneWalking'] == false && on == true){
  my.rapiro.led(255,0,0);
  on = false;
      }
      if(my['doneWalking'] == false){
  my.rapiro.concerned();
      }*/
      if(happy == false){
  my.rapiro.happy();
  happy = true;
      }
      else if(unhappy == false){
  my.rapiro.unhappy();
  unhappy = true;
      }
      else if(concerned == false){
  my.rapiro.concerned();
  concerned = true;
      }
      else if(mad == false){
  my.rapiro.mad();
  mad = true;
  my.rapiro.rightShoulderPitch(90);
      }
    });

    after((30).seconds(), function() {
      console.log("halt");
      console.log("rightshold_p");
 //     my.rapiro.rightShoulderPitch(90);
      my.rapiro.stop();
      my['doneWalking'] = true;
    });
  }
}).start();
