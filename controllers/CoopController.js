var CoOp = require('../models/CoOp')

module.exports = {

	get: function(params, callback){
		CoOp.find(params, function(err, coops){
			if(err){
				callback(err, null)
				return
			}
			callback(null, coops)
			return
		})
	},


	getById: function(id,callback){
		CoOp.findById(id,function(err,coop){
			if(err){
				callback(err, null)
				return
			}
			callback(null, coop)
			return


		})
	},

	post:function(params,callback){
		CoOp.create(params, function(err, coop){
			if (err){
				callback(err, null)
				return
			}

			callback(null, coop)
		})

	}
}