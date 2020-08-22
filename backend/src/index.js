const express = require('express');
const bodyParser = require('body-parser');

//const { Tools } = require('./app/models');

const app = express();

app.use(express.urlencoded({extended : false}));
app.use(bodyParser.json());

/*Tools.create({
	title: 'Notion', 
	link: 'https://notion.so',
	description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.',
	tags: `{'organization', 'planning', 'collaboration', 'writing', 'calendar'}`,
});*/

app.get('/', (request, response)=> {
	response.send('Helloy world!');
}); 

app.listen(3000);