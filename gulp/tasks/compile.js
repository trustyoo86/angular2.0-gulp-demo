'use strict';

import gulp from 'gulp';
import typescript from 'gulp-typescript';
import sourcemaps from 'gulp-sourcemaps';
import config from '../config';
import path from 'path';
import source from 'vinyl-source-stream';
import tscConfig from '../../tsconfig.json';
import browserSync from 'browser-sync';

//gulp type script compile tasks
gulp.task('compile', ['tslint'], () => {
  return gulp.src(config.typescripts.src)
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.typescripts.dest))
    .pipe(browserSync.stream());
});
