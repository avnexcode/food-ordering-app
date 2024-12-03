import type { z } from 'zod';
import type {
    createProductCategorySchema,
    updateProductCategorySchema,
} from './product-category.validation';
import type { Product, ProductCategory } from '@prisma/client';

export type CreateProductCategoryRequest = z.infer<
    typeof createProductCategorySchema
>;

export type UpdateProductCategoryRequest = z.infer<
    typeof updateProductCategorySchema
>;

export interface ProductCategoryReturn extends ProductCategory {
    products: Product[];
}

export interface ProductCategoryResponse {
    id?: string;
    name: string;
    products: Product[];
}
