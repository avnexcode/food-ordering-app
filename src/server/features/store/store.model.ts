import { type z } from 'zod';
import type { updateStoreSchema, createStoreSchema } from './store.validation';
import type { Product, ProductCategory, Store } from '@prisma/client';
import type { UserResponse, UserReturn } from '../user/user.model';

export type CreateStoreRequest = z.infer<typeof createStoreSchema>;
export type UpdateStoreRequest = z.infer<typeof updateStoreSchema>;

export interface StoreReturn extends Store {
    owner: UserReturn;
    products: Product[];
    product_categories: ProductCategory[];
}

export interface StoreResponse {
    id?: string;
    name: string;
    owner: UserResponse;
    products: Product[];
    product_categories: ProductCategory[];
}
