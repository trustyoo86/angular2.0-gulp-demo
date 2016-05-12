'use strict';

import gulp from 'gulp';
import config from '../config';

//gulp library task
gulp.task('libs', ['clean'], function () {
  return gulp.src(config.copies.src)
    .pipe(gulp.dest(config.copies.dest));
});
