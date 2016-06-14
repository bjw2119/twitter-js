
var swig = require('swig');
var router = require('./routes/');
var _= require('lodash');
var express = require ('express');

var app = express();

app.use('/static', express.static('public'))
swig.setDefaults({cache: false });

app.engine('html',swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.listen(3000);
app.use(router);
