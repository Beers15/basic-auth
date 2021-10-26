'use strict';

const express = require('express');
const app = express(); 

const userRoutes = require('./routes/users');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', userRoutes);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('server is up on ' + port));
  },
};
