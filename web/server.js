'use strict';

import express from 'express';
import consign from 'consign';

const server = express();

consign({verbose : true})
  .then('./web/middleware/middleware.js')
  .then('./web/middleware/render.js')
  .then('./web/routes')
  .then('./web/middleware/boot.js')
  .into(server);

  module.exports = server;
