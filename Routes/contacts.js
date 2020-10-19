const express = require('express')
const router = express.Router()
const contacts = require('../data/contacts');
const contractsController = require('../controllers/contacts')

router.get('/contacts', contractsController.list)

router.get('/contacts/:id', contractsController.show)

router.post('/contacts', contractsController.create)

module.exports = router;
