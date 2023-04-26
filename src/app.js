
const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./controller/user.controller.js');

const app = express();

app.use(bodyParser.json());

app.use('/user', router);


module.exports = { app };