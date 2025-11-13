// Server/src/schemas/users.schema.js
import { z } from "zod";

// --- Create User Schema ---
// Defines what data a user must send when creating a new account
export const createUserSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" }),
  last_name: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long" }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});
