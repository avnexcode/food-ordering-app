import type { z } from 'zod';
import type {
    createProductCategorySchema,
    updateProductCategorySchema,
} from './product-category.validation';
import type { Prisma } from '@prisma/client';

export type CreateProductCategoryRequest = z.infer<
    typeof createProductCategorySchema
>;

export type UpdateProductCategoryRequest = z.infer<
    typeof updateProductCategorySchema
>;

export type ProductCategoryWithRelationsResponse =
    Prisma.ProductCategoryGetPayload<{
        include: {
            store: true;
            products: true;
        };
    }>;
