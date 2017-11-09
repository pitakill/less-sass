var browserSync = require('browser-sync').create();
var copy = require('gulp-copy');
var gulp = require('gulp');
var less = require('gulp-less');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('html', function() {
  return gulp
    .src('src/*.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream());
});

gulp.task('less', function() {
  return gulp
    .src('src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist/less'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function() {
  return gulp
    .src('src/sass/*.s*ss')
    .pipe(sass())
    .pipe(gulp.dest('dist/sass'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {
  browserSync.init({
    server: './dist/',
    port: 8080
  });

  gulp.watch('src/assets/**/*', ['copy']);
  gulp.watch('src/*.pug', ['html']);
  gulp.watch('src/**/*.s*ss', ['sass']);
  gulp.watch('src/**/*.less', ['less']);
});

gulp.task('copy', function() {
  return gulp
    .src('src/assets/**/*')
    .pipe(copy('dist/assets/', { prefix: 2 }))
    .pipe(gulp.dest('dist/assets'))
    .pipe(browserSync.stream())
});

gulp.task('default', [
  'copy',
  'html',
  'less',
  'sass',
  'serve'
]);
