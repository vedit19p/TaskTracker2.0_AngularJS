var gulp = require('gulp');
var uglyfly = require('gulp-uglyfly');
var sass = require('gulp-sass');

gulp.task('default', function() {
    // place code for your default task here
    console.log("Gulp is running!");
});


gulp.task('compress', function() {
    gulp.src('JS/*.js')
        .pipe(uglyfly())
        .pipe(gulp.dest('dist'))
});


gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
