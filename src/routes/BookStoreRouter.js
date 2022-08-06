const express = require('express');
const router = express.Router();
const BookStoreController = require('../controller/BookStoreController');
const verifyToken = require('../middlewares/verifyToken');

router.get('/books/all', BookStoreController.allBooks);
router.get('/books/title/:title', BookStoreController.bookByTitle);
router.get('/books/:id', BookStoreController.bookById);

router.use(verifyToken);
router.post('/books/create', BookStoreController.createBook);
router.put('/books/:id/update', BookStoreController.updateBook);
router.delete('/books/:id/delete', BookStoreController.deleteBook);

module.exports = router;