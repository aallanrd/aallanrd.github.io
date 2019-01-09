// AuthController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../models/Users');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
var VerifyToken = require('./VerifyToken');

//Register Endpoint
router.post('/register', function(req, res) {
  
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
  User.findOne({ username: req.body.username }, function (err, user) {
    if (user) return res.status(409).send('User is already registered.');
	
	User.create({
		username : req.body.username,
		password : hashedPassword,
		email : req.body.email
	  },
	  function (err, user) {
		if (err) return res.status(400).send("There was a problem registering the user. Credentials may be invalid.")
		// create a token
		var token = jwt.sign({ id: user._id }, config.secret, {
		  expiresIn: 86400 // expires in 24 hours
		});
		res.status(201).send({ auth: true, token: token });
	  }); 
  });
});

//Me Endpoint
router.get('/me', VerifyToken, function(req, res, next) {
    return res.status(200).send({ auth: true, message: 'Token Authenticated.' });
});

//Login Endpoint
router.post('/login', function(req, res) {
  User.findOne({ username: req.body.username }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });
});

//Logout Endpoint
//A token is usually kept in a cookie or the browser’s localstorage. 
//Logging out is as simple as destroying the token on the client. 
//This /logout endpoint is created to logically depict what happens 
//when you log out. The token gets set to null.
router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

// add this to the bottom of AuthController.js
module.exports = router;