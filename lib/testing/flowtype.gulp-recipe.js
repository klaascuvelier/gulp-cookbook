'use strict';

/**
 * @returns {Function}
 */
function flowType(sources, flowOptions)
{
    var gulp        = require('gulp');
    var flowType    = require('gulp-flowtype');
    var _           = require('lodash');

    /**
     * returns {stream}
     */
    return function ()
    {
        flowOptions = _.extend({ all: true, weak: false }, flowOptions || {});

        return gulp
            .src(sources)
            .pipe(flowType(flowOptions));
    };
}

module.exports = flowType;