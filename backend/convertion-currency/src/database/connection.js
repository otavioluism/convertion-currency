const knex = require('knex'); 
const configuration = require('../../knexfile');

// fazendo a conexao com o banco de dados
const connection = knex(configuration.development);

module.exports = connection;