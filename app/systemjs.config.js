(function(global) {
  System.config({
    packages : {
      app : {
        format : 'register',
        defaultExtension : 'js'
      },
      'node-uuid' : {
        map : {
          crypto : '@empty'
        }
      }
    },
    map : {
      immutable : 'lib/immutable.js',
      'node-uuid' : 'lib/uuid.js'
    }
  });
})(this);
