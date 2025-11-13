import { Router } from "express";
import * as ctrl from "../../../controllers/app_users.controller.js";
import { validate } from "../../../utils/validate.js";
import { createUserSchema } from "../../../schemas/app_users.schema.js";

const usersR = Router();
//usersR.get("/", validate(listUsersQuerySchema, "query"), ctrl.list);
usersR.post("/", validate(createUserSchema), ctrl.create);
usersR.post("/authenticate", ctrl.authenticate);
usersR.get("/me", ctrl.me);
usersR.get("/:id", ctrl.getById);
//usersR.patch("/:id", validate(updateUserSchema), ctrl.update);
//usersR.delete("/:id", ctrl.remove);

export default usersR;
