var mongoose = require('mongoose')

var CoOpSchema = new mongoose.Schema({
	name:{type:String, default:''},
	address:{type:String, default:''},
	website:{type:String,default:''},
	members:{type:Number, default:0},
	staff: {type:Array, default:[]},
	timestamp: {type:Date, default:Date.now}

})

module.exports = mongoose.model('CoOpSchema',CoOpSchema)
