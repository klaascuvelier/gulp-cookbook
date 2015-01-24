'use strict';

function webserver(input, options)
{
    var _               = require('lodash');
    var webserver       = require('gulp-webserver');
    var plumber         = require('gulp-plumber');
    var errorHandler    = require('../error-handler');

    var defaultOptions  = {
        host: '0.0.0.0',
        port: 8001,
        livereload: true,
        directoryListing: false,
        fallback: 'index.html'
    };

    options = _.assign(defaultOptions, options);

    /**
     * @returns {stream}
     */
    return function ()
    {
        return gulp
            .src(input)
            .pipe(plumber(errorHandler))
            .pipe(webserver(options));
    }
}

module.exports = webserver;