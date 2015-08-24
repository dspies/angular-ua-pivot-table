(function () {
  'use strict';

  var gulp = require('gulp');
  var jshint = require('gulp-jshint');
  var concat = require('gulp-concat');
  var rename = require('gulp-rename');
  var uglify = require('gulp-uglify');
  var ngAnnotate = require('gulp-ng-annotate');
  var addsrc = require('gulp-add-src');

  var config = require('./config.json');

  // Lint JS
  gulp.task('lint', function () {
    return gulp.src(config.src.files)
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
  });

  // Concat & Minify JS
  gulp.task('minify', function () {
    return gulp.src(config.src.files)
      .pipe(addsrc.prepend(config.meta.banner))
      .pipe(concat(config.dest.unminified))
      .pipe(ngAnnotate({remove: true, add: true, single_quotes: true}))
      .pipe(gulp.dest(config.dest.dir))
      .pipe(rename(config.dest.minified))
      .pipe(uglify())
      .pipe(gulp.dest(config.dest.dir));
  });

}());
