var browserSync = require('browser-sync').create();
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

  gulp.watch('src/*.pug', ['html']);
  gulp.watch('src/**/*.s*ss', ['sass']);
  gulp.watch('src/**/*.less', ['less']);
});

gulp.task('default', [
  'html',
  'less',
  'sass',
  'serve'
]);
