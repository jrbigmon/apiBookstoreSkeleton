const express = require('express');
const app = express();
const port = 3000;
const homeRouter = require('./routes/homeRoute');

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use(homeRouter);

app.listen(port, () => console.log('listening on port ' + port));