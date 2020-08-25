const { Router } = require('express');
const ToolController = require('./app/controllers/ToolController.js');

const routes = Router();

//routes.get('/tools', ToolController.getAll);
routes.get('/tools', ToolController.getByTag);
routes.post('/tools', ToolController.storage);
routes.delete('/tools/:id', ToolController.destroy);


module.exports = routes;