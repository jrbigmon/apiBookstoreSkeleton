const express = require('express');
const app = express();
const port = 3000;
const BookStoreRouter = require('./routes/BookStoreRouter');
const AuthRouter = require('./routes/AuthRouter');

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use('/bookstore/api', AuthRouter);
app.use('/bookstore/api', BookStoreRouter);

app.use((req, res) => {
    return res.status(400).json('Page not found!');
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});