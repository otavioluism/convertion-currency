// importando a conexao com o banco de dados 
const connection = require('../database/connection');

module.exports = { 
  async Convertion(request, response){ 
    const { value } = request.body; 

    const value_currency = await connection('values').where('name', 'Dollar');
    
    const conversition = value/value_currency.value;

    return response.status(200).json({ conversition });
  }
}

