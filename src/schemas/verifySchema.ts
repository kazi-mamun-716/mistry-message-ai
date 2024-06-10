import { z } from "zod";

export const verifySchema = z.object({
    code: z.string().min(6, "Varification code must be 6 digits")
})