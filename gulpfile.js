const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')
const image = require('gulp-image')

gulp.task('sass', () =>
  gulp.src('./sass/**/*.scss')
  .pipe(sass())
  .pipe(concat('style.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./css/'))
)

gulp.task('watch:sass', () =>
  gulp.watch('./sass/**/*.scss', ['sass'])
)

gulp.task('image', () =>
  gulp.src('./img/*')
  .pipe(image())
  .pipe(gulp.dest('./img/'))
)

gulp.task('default', ['sass', 'watch:sass'])
