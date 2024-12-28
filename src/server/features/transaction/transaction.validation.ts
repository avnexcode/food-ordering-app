import { z } from "zod";

export const createTransactionRequest = z.object({
    type: z.string(),
    amount: z.number().int().positive(),
    description: z.string(),
    store_id: z.string(),
    order_id: z.string(),
})