import { z } from 'zod';

export const createProductCategorySchema = z.object({
    name: z.string().min(5).max(100),
});

export const updateProductCategorySchema =
    createProductCategorySchema.partial();
