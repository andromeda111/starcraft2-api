exports.up = function(knex, Promise) {
  return knex.schema.createTable('zerg_units', (table) => {
    table.increments()
    table.string('unit').notNullable().defaultTo('-')
    table.string('mineral').notNullable().defaultTo('-')
    table.string('vespene').notNullable().defaultTo('-')
    table.string('supply').notNullable().defaultTo('-')
    table.string('buildTime').notNullable().defaultTo('-')
    table.string('buildFrom').notNullable().defaultTo('-')
    table.string('life').notNullable().defaultTo('-')
    table.string('energy').notNullable().defaultTo('-')
    table.string('armor').notNullable().defaultTo('-')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('zerg_units')
};
