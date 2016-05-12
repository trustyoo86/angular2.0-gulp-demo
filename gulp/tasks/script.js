'use strict';

import gulp from 'gulp';
import config from '../config';

//systemjs config file task
gulp.task('systemjs', () => {
  return gulp.src(config.systemjs.src)
    .pipe(gulp.dest(config.systemjs.dest));
});
