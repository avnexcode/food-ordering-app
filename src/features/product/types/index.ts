import { z } from 'zod';

export const createProductFormSchema = z.object({
    name: z.string(),
});

export const updateProductFormSchema = createProductFormSchema.partial();

export type CreateProductFormSchema = z.infer<typeof createProductFormSchema>;
export type UpdateProductFormSchema = z.infer<typeof updateProductFormSchema>;
