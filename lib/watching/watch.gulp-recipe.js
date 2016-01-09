'use strict';

function watch(input, task)
{
    var gulp            = require('gulp');
    var gulpWatch       = require('gulp-watch');

    gulpWatch(input, function () {
        gulp.start(task);
    });
}

module.exports = watch;