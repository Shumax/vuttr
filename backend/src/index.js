const express = require('express');
const routes = require('./routes.js');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({extended : false}));
app.use(bodyParser.json());


app.use(routes);

app.listen(3000);