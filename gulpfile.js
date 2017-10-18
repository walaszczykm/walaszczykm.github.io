const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')
const image = require('gulp-image')
const uglify = require('gulp-uglify')

// ***** SASS *****
gulp.task('sass', () =>
  gulp.src('./sass/**/*.scss')
  .pipe(sass())
  .pipe(concat('style.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./dist/'))
)

gulp.task('watch:sass', () =>
  gulp.watch('./sass/**/*.scss', ['sass'])
)

// ***** UGLIFY *****
gulp.task('uglify', () =>
  gulp.src('./js/**/*.js')
  .pipe(concat('bundle.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/'))
)

gulp.task('watch:uglify', () =>
  gulp.watch('./js/**/*.js', ['uglify'])
)

// ***** IMAGE *****
gulp.task('image', () =>
  gulp.src('./img/*')
  .pipe(image())
  .pipe(gulp.dest('./img/'))
)

// ***** DEFAULT *****
gulp.task('default', ['sass', 'uglify', 'watch:sass', 'watch:uglify'])
