import { db } from '@/server/database/db';
import type {
    CreateStoreRequest,
    StoreWithRelations,
    UpdateStoreRequest,
} from './store.model';
import type { Store } from '@prisma/client';

export const storeRepository = {
    findMany: async (): Promise<StoreWithRelations[] | null> => {
        const stores = await db.store.findMany({
            include: {
                owner: {
                    include: {
                        addresses: true,
                    },
                },
                products: {
                    include: {
                        category: true,
                    },
                },
                product_categories: true,
                orders: true,
                transactions: true,
                disbursements: true,
            },
        });

        return stores;
    },

    findUniqueId: async (id: string): Promise<StoreWithRelations | null> => {
        const store = await db.store.findUnique({
            where: { id },
            include: {
                owner: {
                    include: {
                        store: false,
                        addresses: true,
                    },
                },
                products: {
                    include: {
                        category: true,
                    },
                },
                product_categories: true,
                orders: true,
                transactions: true,
                disbursements: true,
            },
        });

        return store;
    },

    countById: async (id: string): Promise<number> => {
        const storeCount = await db.store.count({ where: { id } });
        return storeCount;
    },

    insertOnce: async (
        request: CreateStoreRequest,
        owner_id: string,
    ): Promise<Store> => {
        const newStoreData = { ...request, owner_id };

        const store = await db.store.create({ data: newStoreData });

        return store;
    },

    updateOnce: async (
        id: string,
        request: UpdateStoreRequest,
    ): Promise<Store> => {
        const updateStoreData = { ...request };

        const store = await db.store.update({
            where: { id },
            data: updateStoreData,
        });

        return store;
    },

    deleteOnce: async (id: string): Promise<Store> => {
        const store = await db.store.delete({ where: { id } });
        return store;
    },
};
