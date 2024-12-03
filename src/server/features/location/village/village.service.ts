import { type Village } from '@prisma/client';
import type {
    CreateVillageRequest,
    UpdateVillageRequest,
} from './village.model';
import { villageRepository } from './village.repository';
import { NotFoundException } from '@/server/lib/error.exception';
import { validateSchema } from '@/server/service';
import { createVillageSchema, updateVillageSchema } from './village.validation';

export const villageService = {
    getAll: async (): Promise<Village[]> => {
        const villages = await villageRepository.findMany();
        return villages!;
    },

    getById: async (id: number): Promise<Village> => {
        const village = await villageRepository.findUniqueId(id);

        if (!village) {
            throw new NotFoundException('Village Not FOund');
        }

        return village;
    },

    create: async (request: CreateVillageRequest): Promise<Village> => {
        const validatedRequest: CreateVillageRequest = validateSchema(
            createVillageSchema,
            request,
        );

        const village = await villageRepository.insert(validatedRequest);

        return village;
    },

    update: async (
        id: number,
        request: UpdateVillageRequest,
    ): Promise<Village> => {
        const validatedRequest: UpdateVillageRequest = validateSchema(
            updateVillageSchema,
            request,
        );

        const village = await villageRepository.update(id, validatedRequest);

        return village;
    },

    delete: async (id: number): Promise<{ id: number }> => {
        await villageService.getById(id);

        await villageRepository.delete(id);

        return { id };
    },
};
