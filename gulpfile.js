const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const debug = require('gulp-debug');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function style() {
    return gulp.src('./src/css/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}
function script() {
    return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

function images() {
    return gulp.src('./src/image/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(debug({title:'imagem encontrada:'}))
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/image'));
}


exports.default = gulp.parallel(style, images,script);

exports.watch = function() {
    gulp.watch('./src/css/*.scss',gulp.parallel(style))
     gulp.watch('./src/js/*.js',gulp.parallel(script))
    gulp.watch('./src/image/**/*',gulp.parallel(style))
}