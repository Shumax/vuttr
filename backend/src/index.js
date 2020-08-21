const express = require('express');

const app = express();

app.use(express.urlencoded({extended : false}));

app.get('/', (request, response)=> {
	response.send('Helloy world!');
}); 

app.listen(3000);