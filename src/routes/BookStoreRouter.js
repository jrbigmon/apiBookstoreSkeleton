const express = require('express');
const router = express.Router();
const BookStoreController = require('../controller/BookStoreController');

router.get('/books/all', BookStoreController.allBooks);
router.get('/books/title/:title', BookStoreController.bookByTitle);
router.post('/books/create', BookStoreController.createBook);
router.get('/books/:id', BookStoreController.bookById);
router.put('/books/:id/update', BookStoreController.updateBook);
router.delete('/books/:id/delete', BookStoreController.deleteBook);

module.exports = router;