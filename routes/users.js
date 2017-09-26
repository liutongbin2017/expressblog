var express = require('express');
var router = express.Router();

var user = require("../api/user");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/getUser', function(req, res, next) {
  user.users(function(result) {
    console.log(result);
    res.json(result);
  });
});

router.post('/register', function(req, res, next) {
  var params = req.body;
  user.register(params,function(result) {
    console.log(result);
  });
});

module.exports = router;
