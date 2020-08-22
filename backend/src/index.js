const express = require('express');
const routes = require('./routes.js');
const bodyParser = require('body-parser');

const { Tool } = require('./app/models');

const app = express();

app.use(express.urlencoded({extended : false}));
app.use(bodyParser.json());

Tool.create({
	title: 'Notion', 
	link: 'https://notion.so',
	description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.',
	tags: `{'organization', 'planning', 'collaboration', 'writing', 'calendar'}`,
});
/*
app.get('/', (request, response)=> {
	response.send('Helloy world!');
});*/

app.use(routes);

app.listen(3000);