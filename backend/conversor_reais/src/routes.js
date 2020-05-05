const express = require('express');

// arquivo com as rotas
const Currencycontroler = require('../src/Controllers/Currencycontroller');
const Convertioncontroler = require('../src/Controllers/Convertioncontroler');

const routes = express.Router();

// Create Currency
routes.post('/currency', Currencycontroler.Create)

// List Currency
routes.get('/currency', Currencycontroler.List);

// Delete Currency
routes.delete('/currency/:id', Currencycontroler.Delete);

// Update Information Currency
routes.patch('/currency/:id', Currencycontroler.Update);

// Create Conversion of Currency 
routes.post('/convertion-currency', Convertioncontroler.Convertion); 

module.exports = routes;