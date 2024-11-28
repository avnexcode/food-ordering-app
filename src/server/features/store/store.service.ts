import { NotFoundException } from '@/server/lib/error.exception';
import {
    destroyStore,
    findStoreById,
    findStores,
    insertStore,
    updateStoreOne,
} from './store.repository';
import type { CreateStoreRequest, UpdateStoreRequest } from './store.model';
import { validateSchema } from '@/server/service';
import { createStoreSchema, updateStoreSchema } from './store.validation';
import { toStoreResponse } from '@/server/utils/toStoreResponse';

export const getStores = async () => {
    const data = await findStores();

    const stores = data.map(store => toStoreResponse(store));

    return stores;
};

export const getStoreById = async (id: string) => {
    const store = await findStoreById(id);

    if (!store) {
        throw new NotFoundException('Store not found`');
    }

    return store;
};

export const createStore = async (request: CreateStoreRequest) => {
    const validatedCreateStoreRequest: CreateStoreRequest = validateSchema(
        createStoreSchema,
        request,
    );

    const store = await insertStore(validatedCreateStoreRequest);

    return store;
};

export const updateStore = async (id: string, request: UpdateStoreRequest) => {
    await getStoreById(id);

    const validatedUpdateStoreRequest: UpdateStoreRequest = validateSchema(
        updateStoreSchema,
        request,
    );

    const store = await updateStoreOne(id, validatedUpdateStoreRequest);

    return store;
};

export const deleteStore = async (id: string) => {
    await getStoreById(id);

    await destroyStore(id);

    return { id };
};
