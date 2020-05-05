const crypto = require('crypto');

// importando a conexao com o banco de dados 
const connection = require('../database/connection');


module.exports = { 

  // criando todas moedas e armazenando no banco de dados 
  async Create(request, response){ 
    
    const {name, value} = request.body; 
  
      // criar o id 
    const id = crypto.randomBytes(4).toString('HEX');
  
      // conectando a tabelo values e inserindo os dados pegos 
    await connection('values').insert({
        id, 
        name, 
        value,
    });

    return response.status(200).json({ id, name, value })
  },

// listando todas as moedas no banco de dados
  async List(request, response){ 
    //conecatando a tabela value e selecionando todos os dados
    const currencies = await connection('values').select('*');

    return response.json(currencies);
  },

  async Delete(request, response){ 
    const { id } = request.params; 

    // procurando na tabela values onde o id é igual o passado e deletando a informação
    await connection('values').where('id', id).delete();

    // resposta com sucesso e sem conteudo 204
    return response.status(204).send();
  }, 

  async Update(request, response){ 
    const { id } = request.params; 
    const { value } = request.body; 

    await connection('values').where('id', id).update('value', value);

    return response.status(200).send();
  }


}