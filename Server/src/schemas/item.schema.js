import { z } from "zod";

export const createItemSchema = z.object({
  item_name: z.string(),
  item_description: z.string(),
  item_price: z.coerce.number(),
  inventory_count: z.coerce.number().int(),
  item_owner: z.coerce.number().int(),
});
