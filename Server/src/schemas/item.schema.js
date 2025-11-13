import { z } from "zod";

export const createItemSchema = z.object({
  item_name: z.string(),
  item_description: z.string(),
  item_price: z.number(),
  view_count: z.number().int(),
  returns_count: z.number().int(),
  sold_count: z.number().int(),
  inventory_count: z.number().int(),
  item_owner: z.number().int(),
});
