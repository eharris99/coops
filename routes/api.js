var express = require('express');
var router = express.Router();
var CoOp = require('../models/CoOp')
var CoopController = require('../controllers/CoopController')
var FratController = require('../controllers/FratController')

var controllers = {
	coop: CoopController,
	frat: FratController
}

router.get('/:resource/:id', function(req, res, next) {
	var resource = req.params.resource
	var id = req.params.id
	var controller = controllers[resource]

	if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'invalid resource request'
		})
		return
	}

		controller.getById(id, function(err, result){
			if (err){
					res.json({
						confirmation:'fail',
						message:err
					})
					return
				}
				res.json({
					confirmation:'success',
					result:result
				})
				return
				})
	});
		// CoOp.findById(id, function(err, result){
		// 	if (err){
		// 			res.json({
		// 				confirmation:'fail',
		// 				message:err
		// 			})
		// 			return
		// 		}
		// 	res.json({
		// 		confirmation:'success',
		// 		result:result
		// 	})
		// 	return

		// })

	


router.post('/:resource', function(req, res, next) {
var resource = req.params.resource
var controller = controllers[resource]
  

  if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'invalid resource request'
		})
		return
	}

  	controller.post(req.body, function(err, result){
  		if (err){
				res.json({
						confirmation:'fail',
						message:err
					})
					return
				}

				res.json({
					confirmation:'success',
					result:result
				})
				return

		})
	});


/* GET users listing. */
router.get('/:resource', function(req, res, next) {
	var resource = req.params.resource
	var controller = controllers[resource]
  
  if (controller == null){
		res.json({
			confirmation: 'fail',
			message: 'invalid resource request'
		})
		return
	}

  	controller.get(req.query, function(err, results){
			if (err){
					res.json({
						confirmation:'fail',
						message:err
					})
					return
				}

				res.json({
					confirmation:'success',
					results:results
				})
				return

		})
});
  	// CoOp.find(req.query, function(err, results){
  // 		if (err){
		// 		res.json({
		// 				confirmation:'fail',
		// 				message:err
		// 			})
		// 			return
		// 		}

		// 		res.json({
		// 			confirmation:'success',
		// 			results:results
		// 		})
		// 		return

		// })




module.exports = router;