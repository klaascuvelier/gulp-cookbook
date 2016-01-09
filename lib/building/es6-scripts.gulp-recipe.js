'use strict';

/**
 *
 * @param input
 * @param output
 * @param options
 * @returns {Function}
 */
function buildEs6Scripts(input, output, options)
{
    var gulp            = require('gulp');
    var sourcemaps      = require('gulp-sourcemaps');
    var concat          = require('gulp-concat');
    var uglify          = require('gulp-uglify');
    var babel           = require('gulp-babel');
    var ngAnnotate      = require('gulp-ng-annotate');
    var plumber         = require('gulp-plumber');
    var errorHandler    = require('../error-handler');

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
            .pipe(plumber(errorHandler))
            .pipe(sourcemaps.init())
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(concat(options.concat))
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(sourcemaps.write(options.sourceMaps))
            .pipe(gulp.dest(output));
    }
}

module.exports = buildEs6Scripts;

'use strict';
