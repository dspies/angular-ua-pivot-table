(function () {
  'use strict';

  var gulp = require('gulp');
  var browserSync = require('browser-sync').create();

  //=> Linux/Window_NT/OSX
  var os = require('which-os')();

  // Static server
  gulp.task('browser-sync', function () {

    var chromeBrowser = (os == 'Linux' ? 'chromium-browser' : 'google chrome');

    var browsers = ['firefox', chromeBrowser];

    browserSync.init({
      server: 'app',
      files: ['app/*.html', 'app/*.css', 'app/*.js'],
      browser: browsers
    });
  });

}());
