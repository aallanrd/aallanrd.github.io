var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: { 
	type: String, 
	index: true,
	unique: true,
	required: [true, "Username is required."] 
  },
  password: { 
	type: String, 
	required: [true, "Password is required."] 
  },
  email: { 
	type: String, 
	unique: true,
	required: [true, "Name is required."] 
  },
  
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);