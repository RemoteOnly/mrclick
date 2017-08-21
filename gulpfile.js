'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bourbon = require('node-bourbon').includePaths,
    autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    shell = require('gulp-shell');

var paths = {
  sass: ['resources/assets/sass/previous/*.scss','resources/assets/sass/previous/*.sass'],
  js:   ['resources/assets/js/previous/*.js'],
  vendorjs: [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/autosize/dist/autosize.min.js',
    'node_modules/moment/min/moment-with-locales.min.js',
    'node_modules/pickadate/lib/compressed/picker.js',
    'node_modules/pickadate/lib/compressed/picker.date.js',
    'node_modules/pickadate/lib/compressed/picker.time.js',
    'node_modules/jinplace/js/jinplace.min.js',
    'node_modules/select2/dist/js/select2.min.js',
    'node_modules/froala-editor/js/froala_editor.min.js',
    'node_modules/froala-editor/js/plugins/*.js',
    'node_modules/froala-editor/js/languages/ja.js',
  ],
  vendorcss: [
    'node_modules/pickadate/lib/compressed/themes/default.css',
    'node_modules/pickadate/lib/compressed/themes/default.date.css',
    'node_modules/pickadate/lib/compressed/themes/default.time.css',
    'node_modules/select2/dist/css/select2.min.css',
    'node_modules/froala-editor/css/froala_editor.min.css',
    'node_modules/froala-editor/css/froala_style.min.css',
    'node_modules/froala-editor/css/plugins/*.min.css',
  ],
  vendorfont: [
  ]
}

gulp.task('sass', function() {
  var plugins = [
    autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    })
  ];
  gulp.src(paths.sass)
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['sass'].concat(bourbon)
    }))
    .on('error', function(err) {
      return console.log(err);
    })
    .pipe(postcss(plugins))
    .pipe(gulp.dest('public/css'));
});

gulp.task('js', function() {
  gulp.src(paths.js)
    .on('error', function(err) {
      return console.log(err.stack);
    })
    .pipe(jshint('resources/assets/config/.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('vendor', function() {
  gulp.src(paths.vendorjs, {base: 'node_modules'})
    .pipe(gulp.dest('public/js/vendor'));
  gulp.src(paths.vendorcss, {base: 'node_modules'})
    .pipe(gulp.dest('public/css/vendor'));
  gulp.src(paths.vendorfont)
    .pipe(gulp.dest('public/css/vendor/fonts'));
});

gulp.task('server', shell.task([
  'php -c public/.user.ini -S lvh.me:8000 -t public'
]));

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['sass', 'js', 'watch']);
gulp.task('dev', ['default']);
