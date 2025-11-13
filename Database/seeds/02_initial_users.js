/**
 * @param { import('knex').Knex } knex
 * @returns { Promise<void> }
 *
 *
 * This file provides initial seed data for the database once the tables are built it provides data that can be fetched and manipulated for testing the application
 */
import bcrypt from "bcryptjs";
const SALT_ROUNDS = 12;

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("app_users").del();
  await knex("app_users").insert([
    {
      first_name: "Freddy",
      last_name: "Nightmare",
      username: "FNight",
      email: "testemail@test.com",
      password_hash: await bcrypt.hash(String("12qwaszx!@QWASZX"), SALT_ROUNDS),
      account_type: 1,
    },
    {
      first_name: "Jason",
      last_name: "X",
      username: "jasonX",
      email: "jason@fakeuser.net",
      password_hash: await bcrypt.hash(String("12qwaszx!@QWASZX"), SALT_ROUNDS),
      account_type: 3,
    },
  ]);
}
