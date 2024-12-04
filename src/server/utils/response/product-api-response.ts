import { type Product } from '@prisma/client';
import type { ProductWithRelations } from '../../features/product/product.model';
import { toStoreWithOwnerRelationResponse } from './store-api-response';

export const toProductResponse = (product: Product): Product => ({
    id: product.id,
    name: product.name,
    slug: product.slug,
    price: product.price,
    description: product.description,
    images: product.images,
    stock: product.stock,
    weight: product.weight,
    category_id: product.category_id,
    store_id: product.store_id,
    created_at: product.created_at,
    updated_at: product.updated_at,
});

export const toProductWithRelationsResponse = (
    product: ProductWithRelations,
): ProductWithRelations => ({
    ...toProductResponse(product),
    store: toStoreWithOwnerRelationResponse(product.store),
    category: product.category,
});
