const Product = require('./model')
 
const getAll = async (req,res) => {
	try {
		const products = await Product.find({});
		res.json(products);
	}
	catch (err) {
		console.error(err);
		res.status(500).json({message: "Server Error"});
	}
}

const getById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.json(product)
	}
	catch (err) {
		console.error(err);
		res.status(500).json({message: "Server Error"});
	}
}

module.exports = {
	getAll,
	getById
}