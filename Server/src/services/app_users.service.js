import bcrypt from "bcryptjs";
import knex from "../db/knex.js";

const TABLE = "app_users";
const SALT_ROUNDS = 12;

export async function getById(id) {
  return knex(TABLE)
    .where({ id })
    .first(
      "id",
      "email",
      "username",
      "account_type",
      "created_at",
      "updated_at"
    );
}

export async function authUser(userCred) {
  const { email, password } = userCred;

  const user = await knex(`${TABLE} as u`)
    .join("account_types as t", "u.account_type", "t.id")
    .whereRaw("LOWER(u.email) = LOWER(?)", email)
    .first(
      "u.id",
      "u.email",
      "u.username",
      "t.account_type as account_type",
      "u.password_hash"
    );

  if (!user) return null;

  const isMatch = await bcrypt.compare(userCred.password, user.password_hash);

  if (!isMatch) return null;
  return {
    id: user.id,
    email: user.email,
    username: user.username,
    account_type: user.account_type,
  };
}

export async function createUser({
  first_name,
  last_name,
  email,
  username,
  password,
}) {
  const password_hash = await bcrypt.hash(String(password), SALT_ROUNDS);
  const [row] = await knex(TABLE)
    .insert({ first_name, last_name, email, username, password_hash })
    .returning(["id", "email", "username", "created_at", "updated_at"]);
  return row;
}

export async function remove(id) {
  const n = await knex(TABLE).where({ id }).del();
  return n > 0;
}
