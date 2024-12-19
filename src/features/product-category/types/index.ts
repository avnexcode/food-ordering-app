import { type Prisma } from '@prisma/client';
import { z } from 'zod';

export const createProductCategoryFormSchema = z.object({
    name: z
        .string()
        .min(1, { message: 'Name is required' })
        .max(100, { message: 'Name must be 100 characters or less' }),
    description: z
        .string()
        .max(65535, 'Description must be 65535 characters or less')
        .optional(),
});

export const updateProductCategoryFormSchema =
    createProductCategoryFormSchema.partial();

export type CreateProductCategoryFormSchema = z.infer<
    typeof createProductCategoryFormSchema
>;

export type UpdateProductCategoryFormSchema = z.infer<
    typeof updateProductCategoryFormSchema
>;

export type ProductCategoryWithRelations = Prisma.ProductCategoryGetPayload<{
    include: {
        store: true;
        products: true;
    };
}>;
