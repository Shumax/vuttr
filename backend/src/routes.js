const { Router } = require('express');
const ToolController = require('./app/controllers/ToolController.js');
const UserController = require('./app/controllers/UserController.js');
const authToken = require('./app/middlewares/auth.js');

const routes = Router();

routes.post('/register', UserController.storage);
routes.post('/login', UserController.signin);
routes.get('/tools', authToken, ToolController.index);
routes.post('/tools', authToken, ToolController.storage);
routes.delete('/tools/:id', authToken, ToolController.destroy);

module.exports = routes;
