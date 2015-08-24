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
   * Build tasks for directive
   */
  gulp.task('build', ['lint', 'test', 'minify']);
  gulp.task('release-build', ['lint', 'test', 'minify', 'commit-dist']);
  gulp.task('ci-build', ['lint', 'ci-test', 'minify']);

  gulp.task('release-major', ['release-build','bump:major', 'export']);
  gulp.task('release-minor', ['release-build','bump:minor', 'export']);
  gulp.task('release-patch', ['release-build','bump:patch', 'export']);

}());
