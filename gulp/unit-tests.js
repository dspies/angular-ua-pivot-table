(function () {
  'use strict';

  var gulp = require('gulp');
  var karma = require('karma').server;

  /**
   * Run test once and exit.
   *
   * If e2e tests are added, it would be better to put the
   * files to run into the test and not use the files in karma.conf.js
   */
  gulp.task('unit-test', ['lint'], function (done) {

    karma.start({
      configFile: __dirname + '/../karma.conf.js',
      singleRun: true
    }, done);
  });

  /**
   * Run ci test once and exit.
   */
  gulp.task('ci-test', ['lint'], function (done) {

    karma.start({
      configFile: __dirname + '/../karma.ci.conf.js'
    }, done);
  });

  /**
   * Watch for file changes and re-run tests on each change
   */
  gulp.task('tdd', ['lint'], function (done) {
    karma.start({
      configFile: __dirname + '/../karma.conf.js'
    }, done);
  });

}());
