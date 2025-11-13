import { Router } from "express";
import usersR from "./app_users.routes.js";
import itemsR from "./items.routes.js";

const v1 = Router();
v1.use("/users", usersR);
v1.use("/items", itemsR);

export default v1;
