/**
 * This file is designed to be migrated into the PostgreSQl database to build out the Schema for the accounts table.
 * The accounts table will hold the different types of accounts such as admin, merchant, standard
 *
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 * the exports.up is a function knex runs to apply the database schema changes with knex migrate:latest is ran
 **/
exports.up = function (knex) {
  return knex.schema.createTable("app_users", (table) => {
    table.increments().primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("username").notNullable().unique();
    table.string("email").notNullable().unique();
    table.string("password_hash").notNullable();
    table
      .integer("account_type")
      .notNullable()
      .references("id")
      .inTable("account_types")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .defaultTo(2);
    table.timestamp("created_at").notNullable().defaultTo(knex.fn.now());
    table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
  });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 *export.down is a function that undoes the changes of export.up in the below example it drops the table.
 */
exports.down = function (knex) {
  return knex.schema
    .alterTable("app_users", (table) => {
      table.dropForeign("account_type");
    })
    .then(function () {
      return knex.schema.dropTableIfExists("app_users");
    });
};
