(function () {
  'use strict';

  var gulp = require('gulp');

  require('require-dir')('./gulp');   //Require the gulp directory

  var config = require('./gulp/config.json');

  //Default Gulp Task
  gulp.task('default', ['test']);

  /*
   * Default test task
   * Calls all js unit tests
   */
  gulp.task('test', ['lint','unit-test']);

  /*
   * Serve web app
   */
  gulp.task('serve', ['browser-sync']);

  /*
   * Build directive
   */
  gulp.task('build', ['lint', 'test', 'minify']);

}());
