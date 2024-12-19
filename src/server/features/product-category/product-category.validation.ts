import { z } from 'zod';

export const createProductCategorySchema = z.object({
    name: z
        .string()
        .min(1, { message: 'Name is required.' })
        .max(100, { message: 'Name must not exceed 100 characters.' }),
    description: z
        .string()
        .max(65535, {
            message: 'Description must not exceed 65535 characters.',
        })
        .optional(),
});

export const updateProductCategorySchema =
    createProductCategorySchema.partial();
