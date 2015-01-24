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
    var gulp        = require('gulp');
    var sourcemaps  = require('gulp-sourcemaps');
    var concat      = require('gulp-concat');
    var uglify      = require('gulp-uglify');
    var es6to5      = require('gulp-6to5');
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
            .pipe(es6to5())
            .pipe(concat(options.concat))
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(sourcemaps.write(options.sourceMaps))
            .pipe(gulp.dest(output));
    }
}

module.exports = buildEs6Scripts;

'use strict';
