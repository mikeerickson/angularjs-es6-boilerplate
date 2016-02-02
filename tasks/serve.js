var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// watch files for changes and reload
gulp.task('serve', function() {
	browserSync({
		port: 4242,
		ui: {
			port: 4243
		},
		server: {
			baseDir: 'dist',
		}
	});

	gulp.watch(['./dist/**/*.html', 'dist/css/**/*.css', 'dist/js/**.js'], {cwd: 'dist'}, reload);

});
