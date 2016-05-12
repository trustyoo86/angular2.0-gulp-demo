'use strict';

import http from 'http';

module.exports = (server) => {
  http.createServer(server).listen(80, () => {
    console.log('server listen port 80');
  });
};
