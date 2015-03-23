'use strict';

function swig(input, output, options)
{
    var gulp            = require('gulp');
    var swig            = require('gulp-swig');
    var plumber         = require('gulp-plumber');
    var errorHandler    = require('../error-handler');


    /**
     * @returns {stream}
     */
    return function ()
    {
        return gulp
            .src(input)
            .pipe(plumber(errorHandler))
            .pipe(swig(options))
            .pipe(gulp.dest(output));
    }
}

module.exports = swig;