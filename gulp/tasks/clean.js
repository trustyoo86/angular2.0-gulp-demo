import gulp from 'gulp';
import del from 'del';
import config from '../config';

//gulp clean task
gulp.task('clean', () => {
  return del(config.clean);
});
