var jwt = require('jsonwebtoken');
var config = require('../config');
var User = require('../models/Users');

function verifyToken(req, res, next) {
  var token = req.headers['x-access-token'];
  
  if (!token)
    return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
    // if everything good, find the user with the decoded id
	User.findById(decoded.id, { password: 0 }, function (err, user) {
		if (err) return res.status(500).send("There was a problem finding the user.");
		if (!user) return res.status(404).send("No user found.");
		//If user authenticated, do the request.
		next();
	});
  });
}
module.exports = verifyToken;