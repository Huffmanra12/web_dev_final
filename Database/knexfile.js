require("dotenv").config();

const { DB_HOST, DB_PORT, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD } =
  process.env;

const host = DB_HOST;

const base = {
  client: "pg",
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
  },
  pool: { min: 2, max: 10 },
  migrations: { directory: "./migrations", tableName: "knex_migrations" },
  seeds: { directory: "./seeds" },
};

module.exports = {
  development: base,
  production: base,
  test: {
    ...base,
    connection: { ...base.connection, database: `${base.database}_test` },
  },
};
