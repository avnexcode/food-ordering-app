import { NotFoundException } from '@/server/lib/error.exception';
import { storeRepository } from './store.repository';
import type { CreateStoreRequest, UpdateStoreRequest } from './store.model';
import { validateSchema } from '@/server/service';
import { createStoreSchema, updateStoreSchema } from './store.validation';
import { toStoreResponse } from '@/server/utils/toStoreResponse';

export const storeService = {
    getAll: async () => {
        const data = await storeRepository.findMany();

        const stores = data.map(store => toStoreResponse(store));

        return stores;
    },

    getById: async (id: string) => {
        const store = await storeRepository.findUniqueById(id);

        if (!store) {
            throw new NotFoundException('Store not found`');
        }

        return toStoreResponse(store);
    },

    create: async (request: CreateStoreRequest) => {
        const validatedRequest: CreateStoreRequest = validateSchema(
            createStoreSchema,
            request,
        );

        const store = await storeRepository.insertOne(validatedRequest);

        return store;
    },

    update: async (id: string, request: UpdateStoreRequest) => {
        await storeService.getById(id);

        const validatedRequest: UpdateStoreRequest = validateSchema(
            updateStoreSchema,
            request,
        );

        const store = await storeRepository.updateOne(id, validatedRequest);

        return store;
    },

    delete: async (id: string) => {
        await storeService.getById(id);

        await storeRepository.deleteOne(id);

        return { id };
    },
};
