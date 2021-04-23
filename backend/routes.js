const express = require('express')
const router = express.Router()

//@Product route
const productRouter = require('./modules/product/router')
router.use('/products', productRouter)

module.exports = router