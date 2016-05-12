'use strict';

import gulp from 'gulp';
import tslint from 'gulp-tslint';
import config from '../config';

//gulp typescript lint
gulp.task('tslint', () => {
  return gulp.src(config.typescripts.src)
    .pipe(tslint())
    .pipe(tslint.report('prose'));
});
