'use strict';

import gulp from 'gulp';
import config from '../config';

gulp.task('resources', () => {
  return gulp.src([config.resources.src, config.resources.ignore])
    .pipe(gulp.dest(config.resources.dest));
});
