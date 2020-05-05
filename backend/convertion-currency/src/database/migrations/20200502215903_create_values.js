
// aqui você faz tudo na tabela 
exports.up = function(knex) {
  return knex.schema.createTable('values', function(table){ 
    table.string('id').primary();                      // coluna id com chave primaria
    table.string('name').notNullable();     // coluna nome que nao pode deixar o campo em branco
    table.decimal('value').notNullable();  // coluna valores que nao pode deixar o campo em branco
  });
};

// aqui você desfaz tudo na tabela
exports.down = function(knex) {
  return knex.schema.dropTable('values');        
};
