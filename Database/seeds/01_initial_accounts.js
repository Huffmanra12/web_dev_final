/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 *
 * This file provides initial seed data for the database once the tables are built it provides data that can be fetched and manipulated for testing the application
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("account_types").del();
  await knex("account_types").insert([
    {
      account_type: "Admin",
    },
    {
      account_type: "Standard",
    },
    {
      account_type: "merchant",
    },
  ]);
}
