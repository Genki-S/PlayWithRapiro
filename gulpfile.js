var gulp = require('gulp');
var gutil = require('gulp-util');
var rsync = require('rsyncwrapper').rsync;

gulp.task('rsync', function() {
  rsync({
    ssh: true,
    src: './rapiro/',
    dest: 'pi@192.168.1.239:/home/pi/rapiro',
    recursive: true,
    args: ['--verbose']
  }, function(error, stdout, stderr, cmd) {
    // notify("HELLO");
  });
});

gulp.task('watch', function() {
  gulp.watch('./rapiro/**/*', ['rsync']);
});
