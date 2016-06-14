var express = require('express');
var tweetBank = require('../tweetBank');

var router = express.Router();

router.use('/static', express.static('public'));

router.get('/static/stylesheets/style.css', function (req,res,next) {
  console.log(__dirname);
  res.sendFile('/stylesheets/style.css');


});

router.get('/users/:userName', function(req, res, next){
  var tweets = tweetBank.find({name:req.params.userName});
  //console.log(req.params.userName +"'s tweets: "+tweets)
  res.render('index', {title: req.params.userName+"'s tweets", tweets:tweets});


});

router.get('/tweets/:id', function(req,res,next){
  var tweets = tweetBank.find({id:req.params.id})
  console.log(tweets);
  res.render('index', {title: "Tweet #"+req.params.id, tweets:tweets})
});

router.use(function(req,res,next){
  //swig.renderFile('views', obj, function(err,output) {
  //console.log(output);
  var tweets = tweetBank.list();

  res.render('index', {title: "twitter clone", tweets:tweets});
  });

module.exports = router;
