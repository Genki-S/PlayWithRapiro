var Cylon = require('cylon');
var server = require('./server');
var cv = require('opencv');
var camera = new cv.VideoCapture(0);

var existCnt = false;
var fileName = new Array("./center.jpg","./right.jpg","./left.jpg");
var neckAngle = new Array(3);
neckAngle[0] = 90;
neckAngle[1] = 45;
neckAngle[2] = 135;

var sumFace = 0;
var n = 0;

var direction = new Array(3);
direction[0] = 0;
direction[1] = 0;
direction[2] = 0;

Cylon.robot({
  connection : {name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyAMA0'},
  devices: {name: 'rapiro', driver: 'rapiro'},

  work: function(my){
    my.rapiro.rightShoulderRoll(0);
    my['halt'] = false;
    my['help'] = false;
    my['detected'] = false;
    my['failureCount'] = 0;

    my['i'] = 0;

    my['captureVision'] = function (n) {
      console.log(n);
      if(sumFace != 0){
        console.log("sumFACE != 0");
        return;
      }

      if(n == 3){
        my.rapiro.head(90);
        console.log("HEAD90");
        n = 0;
        if(sumFace == 0){
          console.log("SUMFACE = 0");
          my['captureVision'](n);
        }
        console.log("CAP RETURN");
        return;
      }

      my.rapiro.head(neckAngle[n]);
      camera.read(function(err, im) {
        console.log("CAMERA READ");
        if(err) throw err;
        setTimeout(function(){im.save(fileName[n]);
          console.log("Save "+ fileName[n]);
          my['detectFace'](n);
        }, 1000);
      });
    }

    my['detectFace'] = function(n){
      console.log("DETECT FACE");
      cv.readImage(fileName[n], function(err, im){
        im.detectObject(cv.FACE_CASCADE, {}, function(err, faces){
          console.log(n + ":" + faces.length);
          direction[n] = faces.length;
          sumFace += faces.length;
          setTimeout(my['captureVision'](n+1), 800);
        });
      })
    }

    my['waveFlagAndHalt'] = function() {
      my.rapiro.stop();
      my.rapiro.unhappy();
      my['halt'] = true;
    }

    my['goForward'] = function() {
      my.rapiro.stop();
      my.rapiro.forward();
    }

    my['walk'] = function() {
      if(direction[0] > 0){
        console.log("forward");
        my.rapiro.forward();
        after((10).seconds(), my['waveFlagAndHalt']);
      }
      else if(direction[1] > 0){
        console.log("left");
        my.rapiro.left();
        after((5).seconds(), my['goForward']);
        after((15).seconds(), my['waveFlagAndHalt']);
      }
      else if(direction[2] > 0){
        console.log("right");
        my.rapiro.right();
        after((5).seconds(), my['goForward']);
        after((15).seconds(), my['waveFlagAndHalt']);
            }
    }

    my['captureVision'](my['i']);

      every((1).second(), function() {
      if (my['halt'])
        return;
        if (my['failureCount'] < server.getRequestCount()) {
          my['help'] = true;
          return;
        }
      my['walk']();
      });
    
    after((120).seconds(), function() {
      console.log("halt");
      my['halt'] = true;
      my.rapiro.head(90);
      my.rapiro.stop();
    });
  }
}).start();

server.start();