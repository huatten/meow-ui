const gulp = require('gulp')
const postcss = require('gulp-postcss')
const cssmin = require('gulp-cssmin')

gulp.task('compile', function () {
  return gulp.src('./src/*.scss')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'))
})

gulp.task('build', ['compile'])