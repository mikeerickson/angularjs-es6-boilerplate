// WATCH TASK
// =============================================================================

/*global require*/

// TODO: Convert watch.js to ES6

(function(){

	var gulp    = require('gulp');
	var console = require('gulp-messenger');
	var config  = require('./gulp.config.js');
	var utils   = require('./utils/cd-utils');

	console.init({timestamp: false});

	gulp.task('watch', function() {

		console.success('*', utils.padCenter('All Watchers Started', 80, ' '),  '*');

		gulp.watch(config.scripts.src, ['compile:scripts']);
		gulp.watch(config.lint.src,    ['lint']);
		gulp.watch(config.todo.src,    ['todo']);
		gulp.watch(config.tests.specs, ['test']);
		//gulp.watch(config.test.karma, ['karma']);

	});

	gulp.task('watch:dev', function(){
		console.success('*', utils.padCenter('Development Watchers Started', 80, ' '),  '*');

		gulp.watch(config.scripts.src, ['compile:scripts']);
		gulp.watch(config.lint.src,    ['hint']);
	});

	gulp.task('watch:test', function(){
		console.success('*', utils.padCenter('Testing Watchers Started', 80, ' '),  '*');

		gulp.watch(config.tests.specs, ['test']);
		//gulp.watch(config.test.karma, ['karma']);
	});

})();

