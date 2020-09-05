const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes.js');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.listen(port);

module.exports = app;
