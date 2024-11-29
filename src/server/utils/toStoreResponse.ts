import { toUserResponse } from './toUserResponse';
import type { User, Store, Product, ProductCategory } from '@prisma/client';

type StoreRelation = Store & { owner: User | null } & {
    products: Product[] | null;
} & { product_categories: ProductCategory[] | null };

export const toStoreResponse = (store: StoreRelation) => ({
    id: store.id,
    name: store.name,
    owner: store.owner ? toUserResponse(store.owner) : null,
    products: store.products,
    product_categories: store.product_categories,
});
