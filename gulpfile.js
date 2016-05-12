/**
 *  gulp task files
 *
 * 	task dir : gulp/tasks
 * 	index file : gulp/index.js
 *
 * 	NOTE : require gulp tasks only
 */

global.isProd = false;

require('babel-register');
require('./gulp');
