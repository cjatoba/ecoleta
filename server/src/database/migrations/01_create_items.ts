import Knex from 'knex';

export async function up(knex: Knex){
    //Criar a tabela
    return knex.schema.createTable('items', table  => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

export async function down(knex: Knex){
    // Volta atras (Deleta a tabela) / Faz o contrário do up
    return knex.schema.dropTable('items');
}
