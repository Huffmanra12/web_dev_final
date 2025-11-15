import knex from "../db/knex.js";

const TABLE = "items";

export async function getById(id) {
  return knex(TABLE).where({ id }).first();
}

export async function getByMerchant(id) {
  return knex(TABLE).select("*").where("item_owner", id);
}

export async function addItemSvc({
  item_name,
  item_description,
  item_price,
  inventory_count,
  item_owner,
}) {
  const [row] = await knex(TABLE)
    .insert({
      item_name,
      item_description,
      item_price,
      inventory_count,
      item_owner,
    })
    .returning("*");
  return row;
}
