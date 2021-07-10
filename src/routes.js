/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
const express = require('express');
const fs = require('fs');

const data = require('../data.json');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.render('index', { donors: data.donors });
});

routes.post('/', (req, res) => {
  const { name, email, blood } = req.body;

  const id = Number(data.donors.length + 1);

  data.donors.push({
    id,
    name,
    email,
    blood,
  });

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send('Error! Falha na escrita dos dados!');
  });

  return res.redirect('/');
});

module.exports = routes;
