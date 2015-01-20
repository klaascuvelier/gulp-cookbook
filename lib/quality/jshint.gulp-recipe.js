'use strict';

/**
 * @returns {Function}
 */
function jsHint(sources)
{
    var gulp    = require('gulp');
    var jshint  = require('gulp-jshint');
    var stylish = require('jshint-stylish');

    /**
     * returns {stream}
     */
    return function ()
    {
        return gulp
            .src(sources)
            .pipe(jshint())
            .pipe(jshint.reporter(stylish));
    };

}

module.exports = jsHint;