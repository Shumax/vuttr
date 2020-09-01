const { Router } = require('express');
const ToolController = require('./app/controllers/ToolController.js');
const UserController = require('./app/controllers/UserController.js');

const routes = Router();

routes.post('/register', UserController.storage);
routes.get('/tools', ToolController.index);
routes.post('/tools', ToolController.storage);
routes.delete('/tools/:id', ToolController.destroy);

module.exports = routes;
