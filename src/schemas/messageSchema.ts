import { z } from "zod";

export const messageSchema = z.object({
    content: z.string().min(10, {message: "Content must be minimum at least 10 charachter"}),
})