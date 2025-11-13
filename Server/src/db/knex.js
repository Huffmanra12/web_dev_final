import knexFactory from "knex";
import knexfile from "../../../Database/knexfile.js";

const env = "development";
const knex = knexFactory(knexfile[env]);

export default knex;
