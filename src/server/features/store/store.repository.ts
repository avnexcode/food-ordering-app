import { db } from '@/server/database/db';
import type {
    CreateStoreRequest,
    StoreReturn,
    UpdateStoreRequest,
} from './store.model';
import type { Store } from '@prisma/client';

export const storeRepository = {
    findMany: async (): Promise<StoreReturn[] | null> => {
        const stores = await db.store.findMany({
            include: {
                owner: {
                    include: {
                        store: false,
                        addresses: true,
                    },
                },
                products: true,
                product_categories: true,
            },
        });
        return stores;
    },

    findUniqueId: async (id: string): Promise<StoreReturn | null> => {
        const store = await db.store.findUnique({
            where: { id },
            include: {
                owner: {
                    include: {
                        store: false,
                        addresses: true,
                    },
                },
                products: true,
                product_categories: true,
            },
        });

        return store;
    },

    countById: async (id: string): Promise<number> => {
        const storeCount = await db.store.count({ where: { id } });
        return storeCount;
    },

    insertOne: async (
        request: CreateStoreRequest,
        owner_id: string,
    ): Promise<Store> => {
        const newStoreData = {
            name: request.name,
            owner_id,
        };

        const store = await db.store.create({ data: newStoreData });

        return store;
    },

    updateOne: async (
        id: string,
        request: UpdateStoreRequest,
    ): Promise<Store> => {
        const updateStoreData = {
            name: request.name,
        };

        const store = await db.store.update({
            where: { id },
            data: updateStoreData,
            include: {},
        });

        return store;
    },

    deleteOne: async (id: string): Promise<Store> => {
        const store = await db.store.delete({ where: { id } });
        return store;
    },
};
