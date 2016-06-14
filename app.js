var express = require('express');
var app = express();

app.listen(3000);

app.use(function(req, res, next){
  console.log("Request received:" + req.header.toString());
  res.end();
});

app.get('/', function(req, res, next){

})
