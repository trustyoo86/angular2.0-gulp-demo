'use strict';

import path from 'path';

/**
 * script file filter
 * @param  {string} name file name
 * @return {boolean} file regex test name (true or false)
 */
export default function(name) {
  return /(\.(js)$)/i.test(path.extname(name));
};
