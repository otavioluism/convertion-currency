const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// metodo para autorizar com front-end tem acesso a esse back-end 
app.use(cors());

// habilitando para a aplicacao back-end receber dados json do front-end
app.use(express.json());

// usando o arquivo routes para rotas 
app.use(routes);


// aplicacao back-end escuta a porta 3333 
app.listen(3333, () => {
  console.log('🚀   Server started on port 3333!');
});