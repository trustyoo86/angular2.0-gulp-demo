'use strict';

import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

module.exports = (server) => {
  server.use(express.static(path.join(__dirname, '..', '..', '/dist')));
  server.use('/node_modules', express.static(path.join(__dirname, '..', '..', '/node_modules')));
  server.use(bodyParser.urlencoded({extend : true}));
  server.use(bodyParser.json());
  //CORS issues config
  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, x-forwarded-for, X-Requested-With, Content-Type, Accept');
    next();
  });
};
