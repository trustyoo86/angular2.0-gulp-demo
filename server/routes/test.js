'use strict';

module.exports = (server) => {
  server.route('/test')
    .get((req, res) => {
      var obj = {
        status_cd : 200,
        status_msg : 'Success'
      };

      res.status(200).json(obj);
    });
};
