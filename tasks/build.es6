// BUILD TASK
// =============================================================================

import gulp       from 'gulp';
import babel      from 'gulp-babel';
import babelify   from 'babelify';
import config     from './gulp.config.js';
import msg        from 'gulp-messenger';
import browserify from 'browserify'
import sourcemaps from 'gulp-sourcemaps';
import source     from 'vinyl-source-stream'
import buffer     from 'vinyl-buffer'
import concat     from 'gulp-concat'


// Build scripts, don't worry about the rest of the stuff
// babel settings are referenced from .babelrc so it can be shared with babel cli interface
gulp.task('build:scripts', () => {
	return gulp.src(config.scripts.src)
		.pipe(babel())
		.pipe(msg.flush.success('*** Building Scripts ***'))
		.pipe(gulp.dest(config.scripts.dest));
});

gulp.task('build:browser', () => {
	return browserify({entries: ['./src/app.module.es6'], debug: true})// TODO: move to config
		.transform("babelify", {presets: ['es2015']})
		.bundle()
		.pipe(source('app.js'))// TODO: move to config
		.pipe(buffer())
		.pipe(sourcemaps.init())
		.pipe(buffer())
		//.pipe(uglify())
		.pipe(sourcemaps.write('./maps'))// TODO: move to config
		.pipe(gulp.dest('./dist/js')); // TODO: move to config
})

// Alias, build all the things (including linting and specs)
gulp.task('build',['eslint','mocha','build:scripts']);
gulp.task('compile:scripts',['build:scripts'])
