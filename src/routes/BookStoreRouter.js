const express = require('express');
const router = express.Router();
const BookStoreController = require('../controller/BookStoreController');

router.get('/books', BookStoreController.viewAllBooks);
router.post('/books/create', BookStoreController.createBook);
router.get('/books/:id', BookStoreController.viewBook);
router.put('/books/:id/update', BookStoreController.updateBook);
router.delete('/books/:id/update', BookStoreController.updateBook);

module.exports = router;