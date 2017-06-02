var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');

// sass
gulp.task('sass', function () {
  gulp.src( 'sass/**/*.scss' )
    .pipe(plumber({
      errorHandler: notify.onError('<%= error.message %>')
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
        cascade: false
    }))
    .pipe(gulp.dest( 'src/css' ));
});

// pug
gulp.task('pug', function () {
  gulp.src(['./pug/**/*.pug', '!./pug/**/_*.pug'])
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('src'));
});

// watch
gulp.task('watch', () => {
    return watch(['sass/**/*.scss'], () => {
        return gulp.start(['sass']);
    });
});

//browser-sync
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "src",
            index: "sass_training.html"
        }
    });
});

//bs-reload
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// src配下の *.html、src/css配下の *.css ファイルが変更されたらリロード。
gulp.task('default', ['browser-sync'], function () {
    gulp.watch("sass/**/*.scss", ['sass']);
    gulp.watch("pug/**/*.pug", ['pug']);
    gulp.watch("src/**/*.html", ['bs-reload']);
    gulp.watch("src/css/*.css", ['bs-reload']);
});
