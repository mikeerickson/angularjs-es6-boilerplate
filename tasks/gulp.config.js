// GULP CONFIGURATION
// =============================================================================

"use strict";

module.exports = {

	scripts: {
		src:  ['./src/**/*.{js,jsx,es6}'],
		dest: './dist/js'
	},

	todo: {
		src: ['./src/**/*.*', './tasks/**/*.*' ,'./specs/**/*.*']
	},

	tests: {
		specs: ['./specs/**/*Spec.{js,es6}'],
		src:   ['./src/**/*.{js,jsx,es6}']
	},

	lint: {
		src:  ['./src/**/*.{js,jsx,es6}','./src/**/*.{js,es6}']
	}

}
