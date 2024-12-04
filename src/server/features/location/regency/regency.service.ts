import { validateSchema } from '@/server/service';
import type {
    CreateRegencyRequest,
    RegencyWithRelations,
    UpdateRegencyRequest,
} from './regency.model';
import { createRegencySchema, updateRegencySchema } from './regency.validation';
import { regencyRepository } from './regency.repository';
import { NotFoundException } from '@/server/lib/error.exception';
import { type Regency } from '@prisma/client';
import {
    toRegencyResponse,
    toRegencyWithRelationsResponse,
} from '@/server/utils/response/regency-api-response';

export const regencyService = {
    getAll: async (): Promise<RegencyWithRelations[]> => {
        const response = await regencyRepository.findMany();

        const regencies = response?.map(regency =>
            toRegencyWithRelationsResponse(regency),
        );

        return regencies!;
    },

    getById: async (id: number): Promise<RegencyWithRelations> => {
        const regency = await regencyRepository.findUniqueId(id);

        if (!regency) {
            throw new NotFoundException('Regency not found');
        }

        return toRegencyWithRelationsResponse(regency);
    },

    create: async (request: CreateRegencyRequest): Promise<Regency> => {
        const validatedRequest: CreateRegencyRequest = validateSchema(
            createRegencySchema,
            request,
        );

        const regency = await regencyRepository.insertOnce(validatedRequest);

        return toRegencyResponse(regency);
    },

    createMany: async (requests: CreateRegencyRequest[]): Promise<number> => {
        const validatedRequests: CreateRegencyRequest[] = requests.map(
            request => validateSchema(createRegencySchema, request),
        );

        const insertRegenciesCount =
            await regencyRepository.insertMany(validatedRequests);

        return insertRegenciesCount;
    },

    update: async (
        id: number,
        request: UpdateRegencyRequest,
    ): Promise<Regency> => {
        const validatedRequest: UpdateRegencyRequest = validateSchema(
            updateRegencySchema,
            request,
        );

        const regency = await regencyRepository.updateOnce(
            id,
            validatedRequest,
        );

        return toRegencyResponse(regency);
    },

    delete: async (id: number): Promise<{ id: number }> => {
        await regencyService.getById(id);

        await regencyRepository.deleteOnce(id);

        return { id };
    },
};
