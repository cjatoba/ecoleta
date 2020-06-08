import Knex from 'knex';

export async function up(knex: Knex){
    //Criar a tabela
    return knex.schema.createTable('point_items', table  => {
        table.increments('id').primary();

        table.integer('point_id')
            .notNullable()
            .references('id')//Usa o campo id como ligação entre as tabelas
            .inTable('points');//Cria chave estrangeira na tabela points

        table.integer('item_id')
        .notNullable()
        .references('id')
        .inTable('items');
    });
}

export async function down(knex: Knex){
    // Volta atras (Deleta a tabela) / Faz o contrário do up
    return knex.schema.dropTable('point_items');
}
