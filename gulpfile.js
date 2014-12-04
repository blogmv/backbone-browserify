var gulp			 = require ('gulp')
	, browserify	 = require ('gulp-browserify')
	, rename 		 = require ('gulp-rename');

gulp.task('browserify', function () {
	return gulp.src('assets/js/main.js')
		.pipe(browserify({
			transform: ['browserify-handlebars'],
			extension: ['.hbs']
		}))
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest('assets/'));
});

gulp.task('watch', function () {
	gulp.watch(['assets/js/**/*.js'], ['browserify']);
});

gulp.task('default', ['browserify', 'watch']);