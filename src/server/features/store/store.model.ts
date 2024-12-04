import { type z } from 'zod';
import type { updateStoreSchema, createStoreSchema } from './store.validation';
import type { Prisma, Store } from '@prisma/client';
import type { SafeUserWithAddressRelation } from '../user/user.model';

export type CreateStoreRequest = z.infer<typeof createStoreSchema>;
export type UpdateStoreRequest = z.infer<typeof updateStoreSchema>;

export type StoreWithRelations = Prisma.StoreGetPayload<{
    include: {
        products: true;
        product_categories: true;
        orders: true;
        transactions: true;
        disbursements: true;
    };
}> & {
    owner: SafeUserWithAddressRelation;
};

export type StoreWithOwnerRelation = Store & {
    owner: SafeUserWithAddressRelation;
};
