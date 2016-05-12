'use strict';

import express from 'express';
import consign from 'consign';

const server = express();

consign({verbose : true})
  .then('./server/middleware/middleware.js')
  .then('./server/middleware/render.js')
  .then('./server/routes')
  .then('./server/middleware/boot.js')
  .into(server);

  module.exports = server;
