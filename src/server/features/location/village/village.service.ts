import { type Village } from '@prisma/client';
import type {
    CreateVillageRequest,
    UpdateVillageRequest,
    VillageWithRelations,
} from './village.model';
import { villageRepository } from './village.repository';
import { NotFoundException } from '@/server/lib/error.exception';
import { validateSchema } from '@/server/service';
import { createVillageSchema, updateVillageSchema } from './village.validation';
import {
    toVillageResponse,
    toVillageWithRelations,
} from '@/server/utils/response/village-api-response';

export const villageService = {
    getAll: async (): Promise<VillageWithRelations[]> => {
        const response = await villageRepository.findMany();

        const villages = response?.map(village =>
            toVillageWithRelations(village),
        );

        return villages!;
    },

    getById: async (id: number): Promise<VillageWithRelations> => {
        const village = await villageRepository.findUniqueId(id);

        if (!village) {
            throw new NotFoundException('Village Not FOund');
        }

        return toVillageWithRelations(village);
    },

    create: async (request: CreateVillageRequest): Promise<Village> => {
        const validatedRequest: CreateVillageRequest = validateSchema(
            createVillageSchema,
            request,
        );

        const village = await villageRepository.insertOnce(validatedRequest);

        return toVillageResponse(village);
    },

    createMany: async (requests: CreateVillageRequest[]): Promise<number> => {
        const validatedRequests: CreateVillageRequest[] = requests.map(
            request => validateSchema(createVillageSchema, request),
        );

        const insertVillagesCount =
            await villageRepository.insertMany(validatedRequests);

        return insertVillagesCount;
    },

    update: async (
        id: number,
        request: UpdateVillageRequest,
    ): Promise<Village> => {
        const validatedRequest: UpdateVillageRequest = validateSchema(
            updateVillageSchema,
            request,
        );

        const village = await villageRepository.updateOnce(
            id,
            validatedRequest,
        );

        return toVillageResponse(village);
    },

    delete: async (id: number): Promise<{ id: number }> => {
        await villageService.getById(id);

        await villageRepository.deleteOnce(id);

        return { id };
    },
};
