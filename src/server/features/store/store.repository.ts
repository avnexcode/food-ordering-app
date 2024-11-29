import { db } from '@/server/database/db';
import type { CreateStoreRequest, UpdateStoreRequest } from './store.model';

export const findStores = async () => {
    const stores = await db.store.findMany({
        include: { owner: true, products: true },
    });
    return stores;
};

export const findStoreById = async (id: string) => {
    const store = await db.store.findUnique({ where: { id } });

    return store;
};

export const countStoreById = async (id: string) => {
    const storeCount = await db.store.count({ where: { id } });
    return storeCount;
};

export const insertStore = async (request: CreateStoreRequest) => {
    const newStoreData = {
        name: request.name,
    };

    const store = await db.store.create({ data: newStoreData });

    return store;
};

export const updateStoreOne = async (
    id: string,
    request: UpdateStoreRequest,
) => {
    const updateStoreData = {
        name: request.name,
    };

    const store = await db.store.update({
        where: { id },
        data: updateStoreData,
    });

    return store;
};

export const destroyStore = async (id: string) => {
    const store = await db.store.delete({ where: { id } });
    return store;
};
