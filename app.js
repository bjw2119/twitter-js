
var swig = require('swig');
var routes = require('./routes/');
var _= require('lodash');
var express = require ('express');
var socketio = require('socket.io');


var app = express();

app.use('/static', express.static('public'))
swig.setDefaults({cache: false });

app.engine('html',swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

var server = app.listen(3000);
var io = socketio.listen(server);
app.use(routes(io));
