var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Terrier SpotIt' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'Google Maps API Example' });
});

router.get('/form', function(req, res, next) {
  res.render('lostitemform', { title: 'Lose an Item?' });
});


module.exports = router;
