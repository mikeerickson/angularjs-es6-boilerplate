import gulp    from 'gulp'
import console from 'gulp-messenger'
import config  from './gulp.config.js'
import utils   from './utils/cd-utils'

console.init({timestamp: false});

gulp.task('watch', () => {
	console.success('*', utils.padCenter('All Watchers Started', 80, ' '),  '*');
	gulp.watch(config.scripts.src, ['compile:scripts']);
	gulp.watch(config.lint.src,    ['lint']);
	gulp.watch(config.todo.src,    ['todo:reporters']);
	gulp.watch(config.tests.specs, ['test']);

});

gulp.task('watch:dev',() => {
	console.success('*', utils.padCenter('Development Watchers Started', 80, ' '),  '*');
	gulp.watch(config.scripts.src, ['compile:scripts']);
	gulp.watch(config.lint.src,    ['hint']);
});

gulp.task('watch:test', () => {
	console.success('*', utils.padCenter('Testing Watchers Started', 80, ' '),  '*');
	gulp.watch(config.tests.specs, ['test']);
});
