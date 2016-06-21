var mongoose = require('mongoose')

var FratSchema = new mongoose.Schema({
	name:{type:String, default:''},
	address:{type:String, default:''},
	website:{type:String,default:''},
	members:{type:Number, default:0},
	officers: {type:Array, default:[]},
	timestamp: {type:Date, default:Date.now}

})

module.exports = mongoose.model('FratSchema',FratSchema)