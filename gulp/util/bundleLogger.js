'use strict';

import gutil        from 'gulp-util';
import prettyHrtime from 'pretty-hrtime';

let startTime;

/**
 * @description
 * 	bundleLogger class
 *  bundle Logger when gulp tasking
 */
export default {
  /**
   * @description gulp task start logging
   */
  start() {
    startTime = process.hrtime();
    gutil.log(`${gutil.colors.green('Rebundling')}...`);
  },

  /**
   * @description gulp task end logging
   */
  end() {
    const taskTime = process.hrtime(startTime);
    const prettyTime = prettyHrtime(taskTime);
    gutil.log(`Finished ${gutil.colors.green('rebundling')} in ${gutil.colors.magenta(prettyTime)}`);
  }
}
