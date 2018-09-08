
/**
 * Kangis App
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

  var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('rootDir',__dirname)
app.set('view engine', 'jade');

// Request Body Json 형태로 읽을 수 있는 라이브러리
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// routes
require('module-alias/register');
var index = require('@route/index')(app)
, art = require('@route/art')(app)
, artist = require('@route/artist')(app)
, comment = require('@route/comment')(app);

app.use('/', index);
app.use('/art',art);
app.use('/artist',artist);
app.use('/comment',comment);
var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


// mongoDB
var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function(){
 console.log("Connected to mongod server");
});

mongoose.connect('mongodb://heroku_7rzgg5js:kjn2hj0mimru1q4uoq392jvr3e@ds143932.mlab.com:43932/heroku_7rzgg5js');
