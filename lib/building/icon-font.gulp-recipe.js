'use strict';

function buildIconFont(fontName, svgFiles, outputTemplate, output, options)
{
    var gulp            = require('gulp');
    var concat          = require('gulp-concat');
    var plumber         = require('gulp-plumber');
    var errorHandler    = require('../error-handler');
    var consolidate     = require('gulp-consolidate');
    var iconfont        = require('gulp-iconfont');


    var className = options.hasOwnProperty('className') ? options.className : 'icon';
    var cssFile   = options.hasOwnProperty('cssFile') ? options.cssFile : fontName + '.css';

    return function () {
        return gulp
            .src(svgFiles)
            .pipe(
            iconfont({
                fontName: fontName,
                normalize: true,
                centerHorizontally: true
            })
        )
            .on('codepoints', function (codepoints) {
                var options = {
                    glyphs: codepoints,
                    fontName: fontName,
                    fontPath: output,
                    className: className
                };

                gulp
                    .src(outputTemplate)
                    .pipe(plumber(errorHandler))
                    .pipe(consolidate('lodash', options))
                    .pipe(concat(cssFile))
                    .pipe(gulp.dest(output));
            })
            .pipe(gulp.dest(output));
    }
}

module.exports = buildIconFont;