import { toUserResponse } from './toUserResponse';
import type { User, Store } from '@prisma/client';

type StoreWithOwner = Store & { owner: User | null };

export const toStoreResponse = (store: StoreWithOwner) => ({
    id: store.id,
    name: store.name,
    owner: store.owner ? toUserResponse(store.owner) : null,
});
