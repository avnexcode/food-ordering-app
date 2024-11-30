import type { z } from 'zod';
import type {
    createProductSchema,
    updateProductSchema,
} from './product.validation';
import type { Product, ProductCategory } from '@prisma/client';
import type { StoreResponse, StoreReturn } from '../store/store.model';
import type { Decimal } from '@prisma/client/runtime/library';

export type CreateProductRequest = z.infer<typeof createProductSchema>;
export type UpdateProductRequest = z.infer<typeof updateProductSchema>;

export interface ProductReturn extends Product {
    store: StoreReturn;
    category: ProductCategory | null;
}

export interface ProductResponse {
    id?: string;
    name: string;
    price: Decimal;
    stock: number;
    store: StoreResponse;
    category: ProductCategory | null;
}
