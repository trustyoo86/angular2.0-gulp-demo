'use strict';

import config from '../config';
import gulp from 'gulp';
import merge from 'merge-stream';

//gulp html source tasks
gulp.task('views', () => {
  const indexFile = gulp.src(config.views.index)
    .pipe(gulp.dest(config.buildDir));

  const views = gulp.src(config.views.src)
    .pipe(gulp.dest(config.views.dest));

  return merge(indexFile, views);
});
