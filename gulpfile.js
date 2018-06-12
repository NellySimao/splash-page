var gulp = require('gulp'),
watch = require('gulp-watch');

var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('styles/main.scss')
  .pipe(sass({style: 'expanded'}))
  .pipe(gulp.dest('assets'))
});

gulp.task('watch', function(){
  gulp.watch('styles/*.scss', ['sass']);
})