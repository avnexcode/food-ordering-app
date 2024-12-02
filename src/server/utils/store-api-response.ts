import type { StoreResponse, StoreReturn } from '../features/store/store.model';
import { toUserResponse } from './user-api-response';

export const toStoreResponse = (store: StoreReturn): StoreResponse => ({
    id: store.id,
    name: store.name,
    owner: toUserResponse(store.owner),
    products: store.products,
    product_categories: store.product_categories,
});
