var cookbook = require('../index');
var gulp = require('gulp');

gulp.task('build', cookbook.building.buildEs6Scripts());
