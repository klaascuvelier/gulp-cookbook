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
    var gulp            = require('gulp');
    var sourcemaps      = require('gulp-sourcemaps');
    var concat          = require('gulp-concat');
    var uglify          = require('gulp-uglify');
    var through         = require('through2');
    var ngAnnotate      = require('gulp-ng-annotate');
    var plumber         = require('gulp-plumber');
    var errorHandler    = require('../error-handler');

    options = options || {};
    options.minify      = typeof options.minify === 'undefined' ? true : options.minify;
    options.concat      = options.concat || 'app.js';
    options.sourceMaps  = '';

    function noop()
    {
        return through.obj(function (file, enc, cb) {
            cb(null, file);
        });
    }

    /**
     * @returns stream
     */
    return function ()
    {
        return gulp
            .src(input)
            .pipe(plumber(errorHandler))
            .pipe(options.sourceMaps !== false ? sourcemaps.init() : noop())
            .pipe(concat(options.concat))
            .pipe(ngAnnotate())
            .pipe(options.minify ? uglify() : noop())
            .pipe(options.sourceMaps !== false ? sourcemaps.write(options.sourceMaps) : noop())
            .pipe(gulp.dest(output));
    }
}

module.exports = buildScripts;
