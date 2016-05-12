'use strict';

import gulp from 'gulp';
import watch from 'gulp-watch';
import config from '../config';

const watchOptions = {
  events : ['add', 'change', 'unlink']
};

//gulp watch option
gulp.task('watch', (cb) => {
  global.isWatching = true;

  watch(config.typescripts.src, () => {
    gulp.src(config.typescripts.src)
      .pipe(watch(config.typescripts.src, watchOptions, () => {
        gulp.start('compile');
      }))
      .on('end', cb);
  });

  watch(config.views.src, () => {
    gulp.src(config.views.src)
      .pipe(watch(config.views.src, () => {
        gulp.start('views');
      }));
  });

  watch(config.styles.src, () => {
    gulp.src(config.styles.src)
      .pipe(watch(config.styles.src, () => {
        gulp.start('styles');
      }));
  });
});
