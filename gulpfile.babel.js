// GULPFILE BABEL
// =============================================================================

import gulp       from 'gulp'

import requireDir from 'require-dir'
import msg        from 'gulp-messenger'

// LOAD ALL TASKS
// =============================================================================
// you can execute task like `gulp <taskName>`

msg.init({timestamp: true})
msg.note('Loading Tasks and Watchers...')

// add support for es6 task files
require.extensions['.es6'] = require.extensions['.js']
requireDir('./tasks', { recurse: false })

gulp.task('default',['watch'])
