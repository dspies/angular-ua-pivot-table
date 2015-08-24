(function () {
  'use strict';

  // dependencies
  var gulp = require('gulp'),
  git = require('gulp-git'),
  bump = require('gulp-bump'),
  filter = require('gulp-filter'),
  tag_version = require('gulp-tag-version');

  function inc(importance) {
    // get all the files to bump version in
    return gulp.src(['./package.json', './bower.json'])
      // bump the version number in those files
      .pipe(bump({type: importance}))
      // save it back to filesystem
      .pipe(gulp.dest('./'))
      // commit the changed version number
      .pipe(git.commit('bumps package version'))
      // read only one file to get the version number
      .pipe(filter('package.json'))
      // **tag it in the repository**
      .pipe(tag_version());
  }

  gulp.task('bump:patch', function () {
    return inc('patch');
  });
  gulp.task('bump:minor', function () {
    return inc('minor');
  });
  gulp.task('bump:major', function () {
    return inc('major');
  });

  gulp.task('push:branch', function () {
    git.push('origin', 'master', {}, function (err) {
      if (err) throw err;
    });
  });

  gulp.task('push:tags', function () {
    git.push('origin', '', {args: " --tags"}, function (err) {
      if (err) throw err;
    });
  });

  gulp.task('commit-dist', function () {
    return gulp.src('./dist/*')
      .pipe(git.add())
      .pipe(git.commit('release created'));
  });

  gulp.task('export', ['push:branch', 'push:tags']);

}());
