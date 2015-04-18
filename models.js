var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');


var userSchema = mongoose.Schema({
	"name" : String,
	"id" : String,
	"description": String,
	"fb_access_token": String,
	"access_token" : String 
});

userSchema.plugin(findOrCreate);

exports.User = mongoose.model('User', userSchema);

