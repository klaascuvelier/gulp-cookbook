'use strict';

/**
 * Create scripts output
 * @param input
 * @param output
 * @param options
 * @returns {Function}
 */
function buildScripts(input, output, options)
{
    var gulp        = require('gulp');
    var sourcemaps  = require('gulp-sourcemaps');
    var concat      = require('gulp-concat');
    var uglify      = require('gulp-uglify');
    var ngAnnotate  = require('gulp-ng-annotate');

    options = options || {};
    options.concat      = 'app.js';
    options.sourceMaps  = '';

    /**
     * @returns stream
     */
    return function ()
    {
        return gulp
            .src(input)
            .pipe(sourcemaps.init())
            .pipe(concat(options.concat))
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(sourcemaps.write(options.sourceMaps))
            .pipe(gulp.dest(output));
    }
}

module.exports = buildScripts;