var express = require('express');
var swig = require('swig');
var app = express();
swig.setDefaults({cache: false });
app.engine('html',swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.listen(3000);

app.use(function(req, res, next){
  console.log(req.method + " " + req.url + " " + res.status);
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

