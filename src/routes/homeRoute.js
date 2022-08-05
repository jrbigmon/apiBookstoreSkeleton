const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.redirect('bookstore/api/books');
})


module.exports = router;
