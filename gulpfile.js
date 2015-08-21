(function () {
  'use strict';

  var gulp = require('gulp');

  require('require-dir')('./gulp');   //Require the gulp directory

  //Default Gulp Task
  gulp.task('default', ['test']);

  /*
   * Default test task
   * Calls all js unit tests
   */
  gulp.task('test', ['unit-test']);

  /*
   * Serve web app
   */
  gulp.task('serve', ['browser-sync'])

}());
