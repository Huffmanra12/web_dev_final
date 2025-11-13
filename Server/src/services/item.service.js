import knex from "../db/knex.js";

const TABLE = "items";

export async function getById(id) {
  return knex(TABLE).where({ id }).first();
}

export async function getByMerchant(id) {
  return knex(TABLE).select("*").where("item_owner", id);
}
