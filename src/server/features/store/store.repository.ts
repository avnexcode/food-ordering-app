import { db } from '@/server/database/db';
import type { CreateStoreRequest, UpdateStoreRequest } from './store.model';

export const storeRepository = {
    findMany: async () => {
        const stores = await db.store.findMany({
            include: { owner: true, products: true, productCategories: true },
        });

        return stores;
    },

    findUniqueId: async (id: string) => {
        const store = await db.store.findUnique({
            where: { id },
            include: { owner: true, products: true, productCategories: true },
        });

        return store;
    },

    countById: async (id: string) => {
        const storeCount = await db.store.count({ where: { id } });
        return storeCount;
    },

    insertOne: async (request: CreateStoreRequest) => {
        const newStoreData = {
            name: request.name,
        };

        const store = await db.store.create({ data: newStoreData });

        return store;
    },

    updateOne: async (id: string, request: UpdateStoreRequest) => {
        const updateStoreData = {
            name: request.name,
        };

        const store = await db.store.update({
            where: { id },
            data: updateStoreData,
        });

        return store;
    },

    deleteOne: async (id: string) => {
        const store = await db.store.delete({ where: { id } });
        return store;
    },
};
