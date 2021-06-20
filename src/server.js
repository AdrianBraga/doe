/* eslint-disable no-console */
const express = require('express');

const server = express();

const routes = require('./routes');

server.use(express.urlencoded({ extended: true }));
server.use(routes);

server.listen(5000, () => {
  console.log('Servidor rodando em https://localhost:5000');
});
