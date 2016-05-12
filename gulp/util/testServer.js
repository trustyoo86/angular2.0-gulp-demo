'use strict';

import express from 'express';

/**
 * gulp test server
 * @param  {number} port  test server port number
 * @param  {string} dir   directory path
 * @return {object} promise promise object
 */
export default function testServer({port, dir}) {
  const app = express();

  app.use(express.static(dir));

  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      resolve(server);
    });
  });
};
