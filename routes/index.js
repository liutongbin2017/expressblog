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


//----------------


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
  var username = params.username,
      password = params.password;

  index.login(username,function(result){
    console.log(result);
    var data = result[0];
    if(data.password == password) {
      req.session.user = data;
      res.json({
        code:200,
        msg: "success"
      })
    } else {
      res.json({
        code:401,
        msg: "登陆失败"
      })
    }
  });
});

//进入首页后数据的post（其中包括数据的种类，下面是我写的）
router.post('/home',function(req,res,next){
  var params = req.body;
  var title = params.title,
      content = params.content,
      createTime = params.createTime,
      abstract = params.abstract,
      userId = params.userId,
      tagId = params.tagId,
      comment = params.comment,
      articleId = params.articleId,
      commentTime = params.commentTime,
      pages = params.pages,
      background = params.background,
      name = params.name;
  
  index.login(title,content,createTime,abstract,userId,tagId,comment,articleId,commentTime,pages,background,name,function (result) {
    console.log(result);
    res.json(result);
  })
})


module.exports = router;
