var express = require('express');
var tweetBank = require('../tweetBank');
var bodyParserFunc = require('body-parser');

var bodyParser = bodyParserFunc.urlencoded({extended: false});
var router = express.Router();



module.exports = function(io){
  router.use(bodyParser);
  router.use('/static', express.static('public'));

  router.get('/static/stylesheets/style.css', function (req,res,next) {
    console.log(__dirname);
    res.sendFile('/stylesheets/style.css');


  });

  router.get('/users/:userName', function(req, res, next){
    var userName = req.params.userName.toString();
    var tweets = tweetBank.find({name:userName});
    //console.log(req.params.userName +"'s tweets: "+tweets)
    res.render('index', {title: userName+"'s tweets", tweets:tweets, showForm:true, user: userName});


  });

  router.get('/tweets/:id', function(req,res,next){
    var tweets = tweetBank.find({id:req.params.id})
    console.log(tweets);
    res.render('index', {title: "Tweet #"+req.params.id, tweets:tweets})
  });

  router.post('/tweets', function(req,res,next){
    console.log(req.body);
    tweetBank.add(req.body.name, req.body.text);
    next();
  });

  router.use(function(req,res,next){
    //swig.renderFile('views', obj, function(err,output) {
    //console.log(output);
    var tweets = tweetBank.list();

    res.render('index', {title: "twitter clone", tweets:tweets, showForm: true});
    });
  return router;
};
