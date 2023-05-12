const express = require('express');
const bodyParser = require('body-parser');
const user = require('./controller/user.controller');

const app = express();

app.use(bodyParser.json());

app.use('/user', user);

app.use((er, req, res, next) => res.send(er.message));

module.exports = app;
