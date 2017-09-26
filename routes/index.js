var express = require('express');
var router = express.Router();
var index = require("../api/index");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'blog' });
});


router.get('/login', function(req, res, next) {
  res.render('login', { title: '登陆' });
});


router.get('/register', function(req, res, next) {
  res.render('register', { title: '注册' });
});



router.post('/register', function(req, res, next) {
  var params = req.body;
  var username = params.username,
      password = params.password,
      phone = params.phone,
      nickname = params.nickname,
      avatar = params.avatar;
  
  index.register(username,password, phone, nickname,avatar,function(result) {
    console.log(result);
    res.json(result);
  });

});

router.post('/login', function(req, res, next) {
  var params = req.body;
  
});




module.exports = router;
