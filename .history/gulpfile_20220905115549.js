const gulp = require('gulp')
const sass = require('gulp-sass')
const minifyCSS = require('gulp-minify-css')

gulp.task('saas', async function(){
  return gulp.src('components')
})