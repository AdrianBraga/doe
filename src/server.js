/* eslint-disable no-console */
const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

const routes = require('./routes');

server.use(express.urlencoded({ extended: true }));
server.use(express.static('./public'));
server.use(routes);

server.set('view engine', 'njk');

nunjucks.configure('./src/views', {
  express: server,
  autoescape: false,
  noCache: false,
  watch: true,
});

server.listen(5000, () => {
  console.log('Servidor rodando em https://localhost:5000');
});
