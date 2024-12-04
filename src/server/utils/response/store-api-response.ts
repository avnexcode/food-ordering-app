import type {
    StoreWithOwnerRelation,
    StoreWithRelations,
} from '@/server/features/store/store.model';
import { toUserWithAddressRelationResponse } from './user-api-response';
import { type Store } from '@prisma/client';

export const toStoreResponse = (store: Store): Store => ({
    id: store.id,
    name: store.name,
    description: store.description,
    image: store.image,
    bank_name: store.bank_name,
    bank_account: store.bank_account,
    bank_holder: store.bank_holder,
    owner_id: store.owner_id,
    created_at: store.created_at,
    updated_at: store.updated_at,
});

export const toStoreWithRelationsResponse = (
    store: StoreWithRelations,
): StoreWithRelations => ({
    ...toStoreResponse(store),
    owner: toUserWithAddressRelationResponse(store.owner),
    products: store.products,
    product_categories: store.product_categories,
    orders: store.orders,
    transactions: store.transactions,
    disbursements: store.disbursements,
});

export const toStoreWithOwnerRelationResponse = (
    store: StoreWithOwnerRelation,
): StoreWithOwnerRelation => ({
    ...toStoreResponse(store),
    owner: toUserWithAddressRelationResponse(store.owner),
});
