const express = require('express')
const router = express.Router()
const products = require('../data/products');
const productsController = require('../controllers/products')

//as well as here returning all the products
router.get('/products', productsController.list)

router.get('/products/:id', productsController.show)

router.post('/products', productsController.create)


module.exports = router;