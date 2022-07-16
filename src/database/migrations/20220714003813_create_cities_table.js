const tableName = 'cities';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id')
        .primary()
        .unsigned();

    table.string('name');

    table.integer('state_id').unsigned();
    table.foreign('state_id')
        .references('states.id');

    table.string('ibge');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists(tableName);
};
