'use strict'
const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

gulp.task('compile', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ["> 0.01%", "Android >= 4.0", "Firefox ESR", "Ios >= 8.0"],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'))
})

gulp.task('copyfont', function () {
  return gulp.src('./src/font/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/font'))
})

gulp.task('build', ['compile', 'copyfont'])