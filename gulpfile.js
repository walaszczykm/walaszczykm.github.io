const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')

gulp.task('sass', () =>
  gulp.src('./sass/*.scss')
  .pipe(sass())
  .pipe(concat('style.min.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./css/'))
)

gulp.task('default', ['sass'])
