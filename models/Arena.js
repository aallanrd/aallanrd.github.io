var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArenaSchema = new Schema({
  name: { 
	type: String, 
	required: [true, "Name is required."] 
  },
  
  opened : { 
	type: Date, 
	required: [true, "Opened Date is required."] 
  },
  
  cost: { 
	type: Number, 
	min : [1, "Capacity must be positive"],
	required: [true, "Cost is required."],
	validate : {
		validator : Number.isInteger,
		message   : 'Capacity: {VALUE} is not an integer value.'
	}
  },
  
  location: { 
	type: String, 
	required: [true, "Location is required."] 
  },
  
  address: { 
	type: String, 
	required: [true, "Address is required."] 
  },
  
  capacity: { 
	  type: Number, 
	  min : [1, "Capacity must be positive"],
	  required: [true, "Capacity is required."],
	  validate : {
		validator : Number.isInteger,
		message   : 'Capacity: {VALUE} is not an integer value.'
	  }
  },
  
  team: [ { type: Schema.Types.ObjectId, ref: 'Team' } ],
  
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Arena', ArenaSchema);