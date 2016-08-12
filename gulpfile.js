var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell');

gulp.task('default', ['watch']);

gulp.task('watch', function () {
  return watch('lib/**/**')
    .pipe(shell([
      'pb upload <%= file.path %>',
      'pb compile',
      'pwd'
    ]))
});
