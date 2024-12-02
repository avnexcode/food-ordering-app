import { NotFoundException } from '@/server/lib/error.exception';
import { storeRepository } from './store.repository';
import type {
    CreateStoreRequest,
    StoreResponse,
    UpdateStoreRequest,
} from './store.model';
import { validateSchema } from '@/server/service';
import { createStoreSchema, updateStoreSchema } from './store.validation';
import { toStoreResponse } from '@/server/utils/store-api-response';
import type { Store } from '@prisma/client';

export const storeService = {
    getAll: async (): Promise<StoreResponse[]> => {
        const data = await storeRepository.findMany();

        const stores = data?.map(store => toStoreResponse(store));

        return stores!;
    },

    getById: async (id: string): Promise<StoreResponse> => {
        const store = await storeRepository.findUniqueId(id);

        if (!store) {
            throw new NotFoundException('Store not found`');
        }

        return toStoreResponse(store);
    },

    create: async (request: CreateStoreRequest): Promise<Store> => {
        const validatedRequest: CreateStoreRequest = validateSchema(
            createStoreSchema,
            request,
        );

        const store = await storeRepository.insertOne(validatedRequest, '');

        return store;
    },

    update: async (id: string, request: UpdateStoreRequest): Promise<Store> => {
        await storeService.getById(id);

        const validatedRequest: UpdateStoreRequest = validateSchema(
            updateStoreSchema,
            request,
        );

        const store = await storeRepository.updateOne(id, validatedRequest);

        return store;
    },

    delete: async (id: string): Promise<{ id: string }> => {
        await storeService.getById(id);

        await storeRepository.deleteOne(id);

        return { id };
    },
};
