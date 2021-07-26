var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));



gulp.task('buildcss', function() {
    return gulp.src('./dev-assets/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./prod-assets/css/'));
});

gulp.task('watch', function(){
    gulp.watch('./dev-assets/**/*.scss', gulp.series('buildcss'));
});