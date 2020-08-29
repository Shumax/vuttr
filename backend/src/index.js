const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.listen(3000);

module.exports = app;
