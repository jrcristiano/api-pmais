const tableName = 'apps';

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments()
        .primary()
        .unsigned();

    table.string('name');

    table.string('url');

    table.string('cover');

    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tableName);
};
