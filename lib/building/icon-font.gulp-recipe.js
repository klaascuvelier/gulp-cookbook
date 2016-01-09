'use strict';

function buildIconFont(fontName, svgFiles, outputTemplate, fontPath, iconPath, options)
{
    var gulp            = require('gulp');
    var concat          = require('gulp-concat');
    var plumber         = require('gulp-plumber');
    var errorHandler    = require('../error-handler');
    var consolidate     = require('gulp-consolidate');
    var iconfont        = require('gulp-iconfont');


    var className   = options.hasOwnProperty('className') ? options.className : 'icon';
    var iconFile    = options.hasOwnProperty('iconFile') ? options.iconFile : fontName + '.css';
    var cssFontPath = options.hasOwnProperty('fontPath') ? options.fontPath : fontPath;

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
                    fontPath: cssFontPath,
                    className: className
                };

                gulp
                    .src(outputTemplate)
                    .pipe(plumber(errorHandler))
                    .pipe(consolidate('lodash', options))
                    .pipe(concat(iconFile))
                    .pipe(gulp.dest(iconPath));
            })
            .pipe(gulp.dest(fontPath));
    }
}

module.exports = buildIconFont;