const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/welcome', (req, res) => {
  res.render('imnew');
});

router.get('/events', (req, res) => {
  res.render('events');
});

router.get('/');

module.exports = router;
