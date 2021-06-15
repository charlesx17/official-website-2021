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

router.get('/connect', (req, res ) => {
  res.render('connect')
})

router.get('/watch-live', (req, res ) => {
  res.render('live')
})

router.get('/about-us', (req, res ) => {
  res.render('aboutus')
})

router.get('/log-in', (req, res ) => {
  res.render('login')
})


router.get('/');

module.exports = router;
