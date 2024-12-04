import { type ProductCategory } from '@prisma/client';
import type { ProductCategoryWithRelationsResponse } from '../../features/product-category/product-category.model';

export const toProductCategoryResponse = (
    productCategory: ProductCategory,
): ProductCategory => ({
    id: productCategory.id,
    name: productCategory.name,
    description: productCategory.description,
    store_id: productCategory.store_id,
    created_at: productCategory.created_at,
    updated_at: productCategory.updated_at,
});

export const toProductCategoryWithRelationsResponse = (
    productCategory: ProductCategoryWithRelationsResponse,
): ProductCategoryWithRelationsResponse => ({
    ...toProductCategoryResponse(productCategory),
    // relations
    store: productCategory.store,
    products: productCategory.products,
});
