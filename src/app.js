
const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./controller/user.controller.js');

const app = express();

app.use(bodyParser.json());

app.use('/user', router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


module.exports = { app };