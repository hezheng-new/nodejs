var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
router.login = function (req,res) {
  res.render('login',{title:'用户登陆'})
};
router.dologin = function (req,res) {
  var usr={
    userName:'test',
    passWord:'123456'
  }
  console.info('body的值:'+req.body);
  if(req.body.username==usr.userName&&req.body.password==usr.passWord){
    res.redirect('/home');
  }else{
    res.redirect('/login');
  }
}
router.home = function (req,res) {
  var usr ={
    username:'test',
    password:'123456'
  }
  res.render('home',{title:'home',user:usr});
}
router.logout= function (req,res) {
  res.redirect('/login');
}

module.exports = router;
