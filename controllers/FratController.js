var Frat = require('../models/Frat')

module.exports = {

	get: function(params, callback){
		Frat.find(params, function(err, frats){
			if(err){
				callback(err, null)
				return
			}
			callback(null, frats)
			return
		})
	},


	getById: function(id,callback){
		Frat.findById(id,function(err,frat){
			if(err){
				callback(err, null)
				return
			}
			callback(null, frat)
			return


		})
	},

	post:function(params,callback){
		Frat.create(params, function(err, frat){
			if (err){
				callback(err, null)
				return
			}

			callback(null, frat)
		})

	}
}