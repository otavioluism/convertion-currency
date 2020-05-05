// importando a conexao com o banco de dados 
const connection = require('../database/connection');

module.exports = { 
  async Convertion(request, response){ 
    const { name, value } = request.body; 

    // pesquisando no banco de dados o name Dollar pegando apenas o value 
    const [value_currency] = await connection('values').where('name', name).select('value');
    
    // conversao da moeda 
    const conversition = value/value_currency.value;
    
    return response.status(200).json( conversition );
  }
}
