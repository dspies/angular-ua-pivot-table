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
  gulp.task('test', ['unit-test']);

  /*
   * Serve web app
   */
  gulp.task('serve', ['browser-sync']);

  /*
   * Build tasks for directive
   */
  gulp.task('build', ['test', 'minify']);
  gulp.task('release-build', ['test', 'minify', 'commit-dist']);
  gulp.task('ci-build', ['ci-test', 'minify']);

  gulp.task('release-major', ['release-build', 'bump:major', 'export']);
  gulp.task('release-minor', ['release-build', 'bump:minor', 'export']);
  gulp.task('release-patch', ['release-build', 'bump:patch', 'export']);

}());
