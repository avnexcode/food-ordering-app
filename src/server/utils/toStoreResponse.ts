import { toUserResponse } from './toUserResponse';
import type { User, Store, Product } from '@prisma/client';

type StoreRelation = Store & { owner: User | null } & {
    products: Product[] | null;
};

export const toStoreResponse = (store: StoreRelation) => ({
    id: store.id,
    name: store.name,
    owner: store.owner ? toUserResponse(store.owner) : null,
    products: store.products,
});
