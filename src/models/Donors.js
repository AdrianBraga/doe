/* eslint-disable no-throw-literal */
/* eslint-disable no-restricted-syntax */
const db = require('../config/db');

module.exports = {
  post(data, callback) {
    const query = `INSERT INTO donors (
      name,
      email,
      blood
    ) VALUES ($1, $2, $3)
    RETURNING id`;

    const values = [data.name, data.email, data.blood];

    db.query(query, values, (err, results) => {
      if (err) throw `Database Error ${err}`;

      callback(results.rows[0]);
    });
  },
  index(callback) {
    db.query(`SELECT * FROM donors`, (err, results) => {
      if (err) throw `Database Error ${err}`;

      callback(results.rows);
    });
  },
};
