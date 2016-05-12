'use strict';

export default {
  browserPort : 3000,
  UIPort : 3001,
  testPort : 3002,

  sourceDir : './app',
  buildDir : './dist/',

  //clean files
  clean : 'dist/**/*',

  //scss style source
  styles : {
    src : 'app/styles/**/*.scss',
    dest : 'dist/css',
    prodSourcemap : false,
    sassIncludePaths : []
  },

  //typescripts
  typescripts : {
    src : 'app/**/*.ts',
    dest : 'dist/app'
  },

  //systemjs.config file
  systemjs : {
    src : 'app/**/*.js',
    dest : 'dist'
  },

  //library copy files
  copies : {
    src : [
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.dev.js',
      'node_modules/node-uuid/uuid.js',
      'node_modules/immutable/dist/immutable.js'
    ],
    dest : 'dist/lib'
  },

  //html view sources
  views : {
    index : 'app/index.html',
    src : 'app/views/**/*.html',
    dest : 'dist/app/views'
  },

  //gzip option
  gzip : {
    src : 'dist/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest : 'dist/',
    options : {}
  },

  init() {
    this.views.watch = [
      this.views.index,
      this.views.src
    ];

    return this;
  }
}.init();
