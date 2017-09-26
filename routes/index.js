var express = require('express');
var router = express.Router();

var db = require("../db/db");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});


router.get('/register', function(req, res, next) {
  res.render('register', { title: 'login' });
});





module.exports = router;
