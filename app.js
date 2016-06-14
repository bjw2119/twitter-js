var express = require('express');
var swig = require('swig');
var index = require('./routes/');
var _= require('lodash');
var tweetBank = require('./tweetBank');
var app = express();
swig.setDefaults({cache: false });
app.engine('html',swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.listen(3000);

app.use(function(req, res, next){
  // console.log(req.method + " " + req.url + " " + res.status);
  var arr = [{a: 1, b:2}, {a:3, b:4}, {c:5, d:6}];
  console.log(_.cloneDeep(arr));
  next();
});

app.use('/special/', function(req, res, next){
  console.log("special area");
  next();
});

app.use(function(req,res,next){
  //swig.renderFile('views', obj, function(err,output) {
  //console.log(output);
  res.render('index',obj);
  });


var title = "Twitter Clone"
var obj = {
  title: "twitter clone",
  people : [{name: "Gandalf"},{name: "Frodo"}, {name: "Hermione"}]
}

