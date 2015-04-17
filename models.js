var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');


var userSchema = mongoose.Schema({
	"name" : { type: String },
	"id" : { type: String },
	"email": { type: String},
	"access_token" : { type: String }
});

var FBuserSchema = mongoose.Schema({
	"name" : { type: String },
	"id" : { type: String },
	"fb_access_token" : { type: String }
});

userSchema.plugin(findOrCreate);
FBuserSchema.plugin(findOrCreate);

exports.User = mongoose.model('User', userSchema);
exports.FBUser = mongoose.model('FBUser', FBuserSchema);

