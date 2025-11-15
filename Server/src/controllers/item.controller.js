import * as svc from "../services/item.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getById = asyncHandler(async (req, res) => {
  const item = await svc.getById(req.params.id);
  if (!item) return res.status(404).json({ error: "Not Found" });
  res.json(item);
});

export const getByMerchant = asyncHandler(async (req, res) => {
  const items = await svc.getByMerchant(req.params.id);
  if (!items) return res.status(404).json({ error: "Not Found" });
  res.json(items);
});

export const addItemCtrl = asyncHandler(async (req, res) => {
  const created = await svc.addItemSvc(req.validated);
  res.status(201).json(created);
});
