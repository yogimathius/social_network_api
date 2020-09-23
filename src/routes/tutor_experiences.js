const router = require('express').Router();

module.exports = db => {
  router.get('/tutor_experiences', (req, res) => {
    db.query(`SELECT * FROM tutor_experiences;`)
      .then((data) => {
        res.json(data.rows)
      });
  });

  return router;
}