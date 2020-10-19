const express = require('express')
const router = express.Router()
const comments = require("../data/comments");

// returning all the comments
const commentsController = require('../controllers/comments')

//as well as here returning all the products
router.get('/comments', commentsController.list)

router.get('/comments/:id', commentsController.show)

router.post('/comments', commentsController.create)

module.exports = router;