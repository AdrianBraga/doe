const express = require('express');

const data = require('./data.json');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.render('index', { donors: data.donors });
});

module.exports = routes;
