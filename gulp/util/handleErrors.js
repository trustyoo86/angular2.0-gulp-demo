'use strict';

import gutil  from 'gulp-util';
import notify from 'gulp-notify';

/**
 * error notify
 * @param  {string} error error messages
 */
export default function(error) {
  //development mode
  if (!global.isProd) {
    const args = Array.prototype.slice.call(arguments);

    //notify console error message
    notify.onError({
      title : 'Compile Error',
      message : '<%= error.message %>'
    }).apply(this, args);

    this.emit('end');
  } else {
    //if error, stop gulp process
    gutil.log(gutil.colors.red(error));
    process.exit(1);
  }
};
