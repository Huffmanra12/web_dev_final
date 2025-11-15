import { Router } from "express";
import * as ctrl from "../../../controllers/item.controller.js";
import { validate } from "../../../utils/validate.js";
import { createItemSchema } from "../../../schemas/item.schema.js";

const itemsR = Router();
itemsR.post("/addItem", validate(createItemSchema), ctrl.addItemCtrl);
itemsR.get("/:id", ctrl.getById);
itemsR.get("/merchantItems/:id", ctrl.getByMerchant);

export default itemsR;
