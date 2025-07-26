const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const debug = require('gulp-debug');
const imagemin = require('gulp-imagemin');

function style() {
    return gulp.src('./src/css/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/image/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(debug({title:'imagem encontrada:'}))
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/image'));
}


function watch(){
    gulp.watch('./src/css/*.scss',style);
}
exports.default = gulp.series(
    gulp.parallel(style, images),
    watch
);

