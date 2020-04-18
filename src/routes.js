const express = require('express');
const routes = express.Router();

const ProdutController = require('./controllers/ProductController');

routes.get('/products', ProdutController.index);
routes.post('/products', ProdutController.store);

module.exports = routes;