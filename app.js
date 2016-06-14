var express = require('express');
var app = express();

app.listen(3000);

app.use(function(req, res, next){
  console.log(req.method + " " + req.url + " " + res.status);
  next();
});

app.use('/special/', function(req, res, next){
  console.log("special area");
  next();
})
