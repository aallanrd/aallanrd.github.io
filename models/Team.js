var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
  name: { 
	type: String, 
	required: [true, "Name is required."] 
  },
  
  founded: { 
	type: Date, 
	required: [true, "Founded Date is required."] 
  },
  
  ownership: { 
	type: String, 
	required: [true, "Ownership is required."] 
  },
  
  coach: {
	type: String, 
	required: [true, "Coach is required."] 
  },
  
  affiliations: { 
	type: String, 
	required: [true, "Affiliations is required."] 
  },
  
  arena_id: { type: Schema.Types.ObjectId, ref: 'Arena', required: [true, "Related Arena is Required"] },
  
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Team', TeamSchema);