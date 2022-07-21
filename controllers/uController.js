

	const Product = require('../model/product');
	const Merchant = require('../model/merchant')

	const homeView = (req, res) => {
		res.render("index")
	}

	const productView = (req, res) => {
		// console.log(req.params);
		// res.send("Processing");

		Product.find({category:req.params.category}, (err, result) => {
			if (result) {
				res.render('product', {result})
			}
		})
	}

	const productDetails = (req, res) => {
		Product.find({_id:req.params.pid}, (err, result) => {
			if (result) {
				res.render('details', {result});
			} else{
				console.log(err)
			}
		})
	}

	const search = (req, res) => {
		// console.log(req.params);
		// res.send("Processing");

		Product.find({username:req.body.user}, (err, result) => {
			if (result.length < 1) {
				res.redirect('/')
			} else {
				res.render('search', {result})
			}
		})
	}

	module.exports = {
		homeView,
		productView,
		productDetails,
		search
	}