const express = require('express')
const router = express.Router()

const { 
	getAll,
	getById 
} = require('./controller')

//@desc GET all products from db
//@route /api/products
router.get('/', getAll)

//@desc Get a product by id from db
//@route /api/products/:id
router.get('/:id', (req,res) => {

})

module.exports = router