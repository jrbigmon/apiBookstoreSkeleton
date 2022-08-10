const express = require('express')
const router = express.Router()
const BookStoreController = require('../controller/BookStoreController')
const verifyToken = require('../middlewares/verifyToken')

router.get('/books', BookStoreController.allBooks)
router.get('/books/title/:title', BookStoreController.bookByTitle)
router.get('/books/:id', BookStoreController.bookById)

router.use(verifyToken)
router.post('/books', BookStoreController.createBook)
router.put('/books/:id', BookStoreController.updateBook)
router.delete('/books/:id', BookStoreController.deleteBook)

module.exports = router
