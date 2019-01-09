var createError = require('http-errors');
var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var apiTeams = require('./routes/teams');
var apiArenas = require('./routes/arenas');
var AuthController = require('./auth/AuthController');

var app = express();


app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/',express.static(path.join(__dirname, 'dist')));
app.use('/api', apiTeams);
app.use('/api', apiArenas);
app.use('/api/auth', AuthController);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.status);
});

//var mongoose = require('mongoose');
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/nba-arenas" || //"mongodb://mongo:27017/nba-arenas", { promiseLibrary: require('bluebird') })
//  .then(() =>  console.log('connection successful'))
//  .catch((err) => console.error(err));


var mongoose = require('mongoose');
var i = 0;
var connectWithRetry = function () {
	return mongoose.connect(process.env.MONGODB_URI || "mongodb://mongo:27017/nba-arenas",{ promiseLibrary: require('bluebird') }, function (err) {
		i += 1;
		if (err) {
			console.error('Failed to connect to mongo on startup - retrying in 5 sec', err, i);
			setTimeout(connectWithRetry, 5000);
		} else {
			console.log("Connection established with mongo");
		}
	});
};
connectWithRetry(); 

module.exports = app;
