import type { z } from 'zod';
import type {
    createProductCategorySchema,
    updateProductCategorySchema,
} from './product-category.validation';

export type CreateProductCategoryRequest = z.infer<
    typeof createProductCategorySchema
>;

export type UpdateProductCategoryRequest = z.infer<
    typeof updateProductCategorySchema
>;
