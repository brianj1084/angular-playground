var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
    sass: ['./scss/**/*.scss'],
    tsc: ['./app/**/*.ts']
};

gulp.task('default', ['tsc', 'sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css/'))
    .on('end', done);
});

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.tsc, ['tsc']);
});

gulp.task('tsc', function () {
    sh.exec("tsc -t es5 --sourceMap --removeComments --out ./js/app.js ./app/_app.ts");
});