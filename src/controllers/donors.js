/* eslint-disable no-restricted-syntax */
const Donors = require('../models/Donors');

module.exports = {
  index(req, res) {
    Donors.index(donors => {
      return res.render('index', { donors });
    });
  },
  post(req, res) {
    Donors.post(req.body, () => {
      return res.redirect('/');
    });
  },
};
