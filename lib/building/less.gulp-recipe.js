'use strict';

/**
 * 
 * @param input
 * @param output
 * @param options
 * @returns {Function}
 */
function buildLess(input, output, options)
{
    var sourcemaps  = require('gulp-sourcemaps');
    var concat      = require('gulp-concat');
    var less        = require('gulp-less');
    var minify      = require('gulp-minify-css');

    options = options || {};
    options.concat      = 'app.css';
    options.sourceMaps  = '';

    /**
     * @returns stream
     */
    return function ()
    {
        return gulp
            .src(input)
            .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(concat(options.concat))
            .pipe(minify())
            .pipe(sourcemaps.write(options.sourceMaps))
            .pipe(gulp.dest(output));
    }
}

module.exports = buildLess;