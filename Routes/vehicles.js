const express = require('express')
const router = express.Router()
const vehicles = require('../data/vehicles');

// same here returning all the vehicles 
const vehiclesController = require('../controllers/vehicles')

//as well as here returning all the products
router.get('/vehicles', vehiclesController.list)

router.get('/vehicles/:id', vehiclesController.show)

router.post('/vehicles', vehiclesController.create)

module.exports = router;