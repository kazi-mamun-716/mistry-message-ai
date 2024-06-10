import { z } from "zod";

export const userSchemaValidation = z
  .string()
  .min(2, "Username must be minimum at least 2 charachter")
  .max(20, "Username must be maximum 20 charachter")
  .regex(/^[a-zA-Z0-9_]+$/,"Username Must not have special charechter");

export const signUpSchemaValidation = z.object({
    userName: userSchemaValidation,
    email: z.string().email({message: "Invalid Email Address"}),
    password: z.string().min(6, {message: "Password must be minimum at least 6 charachter"})
})
