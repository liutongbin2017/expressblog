var express = require('express');
var router = express.Router();
var index = require("../api/index");


/* GET home page. */
router.get('/', function(req, res, next) {
  index.getAllArticleMin(function(result) {
    for(var i = 0; i < result.length; i++) {
      var time = result[i].createTime;
      var date = new Date(time);
      result[i].createTime = date;
      
    }
    res.render('index', { title: '首页', list: result});
  })

});

// router.get('/home', function(req, res, next) {
//   res.render('home', { title: 'blog' });
// });


router.get('/login', function(req, res, next) {
  res.render('login', { title: '登陆' });
});


router.get('/register', function(req, res, next) {
  res.render('register', { title: '注册' });
});


router.get('/personaList', function(req, res, next) {
  res.render('personaList', { title: '个人博客列表' });
});
router.get('/personalDetail', function(req, res, next) {
  res.render('personalDetail', { title: '个人博客详情' });
});
router.get('/personalInformation', function(req, res, next) {
  res.render('personalInformation', { title: '个人信息' });
});
router.get('/pageSetuo', function(req, res, next) {
  res.render('pageSetuo', { title: '页面设置' });
});
router.get('/post', function(req, res, next) {
  res.render('post', { title: '发表博客' });
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


router.post('/post/article', function(req, res, next) {
  var params = req.body;
  var title = params.title,
      abstract = params.abstract,
      content = params.content,
      tags = params.tags,
      createTime = new Date().valueOf(),
      userId = req.session.user.id;


  index.postArticle(title,abstract,content,tags,createTime,userId,function(result){
    console.log(result);
    res.json(result);
  });
});




module.exports = router;
