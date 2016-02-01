// BABELIFY TASK
// =============================================================================

import gulp    from 'gulp'
import msg     from 'gulp-messenger'
import config  from './gulp.config'

msg.init({showPipeFile: false, timestamp: false})

gulp.task('watch:test', () => {
	msg.success('*', 'Mocha Watchers Started', '*')
	gulp.watch('./specs/*.es6', ['test'])
});

