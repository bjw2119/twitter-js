var express = require('express');
var tweetBank = require('../tweetBank');

var router = express.Router();

router.use('/static', express.static('public'));

router.get('/static/stylesheets/style.css', function (req,res,next) {
  console.log(__dirname);
  res.sendFile('/stylesheets/style.css');


});

router.use(function(req,res,next){
  //swig.renderFile('views', obj, function(err,output) {
  //console.log(output);
  var tweets = tweetBank.list();

  res.render('index', {title: "twitter clone", tweets:tweets});
  });

module.exports = router;
