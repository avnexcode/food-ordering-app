import { type District } from '@prisma/client';
import type {
    CreateDistrictRequest,
    UpdateDistrictRequest,
} from './district.model';
import { districtRepository } from './district.repository';
import { NotFoundException } from '@/server/lib/error.exception';
import { validateSchema } from '@/server/service';
import {
    createDistrictSchema,
    updateDistrictSchema,
} from './district.validation';

export const districtService = {
    getAll: async (): Promise<District[]> => {
        const districts = await districtRepository.findMany();

        return districts!;
    },

    getById: async (id: number): Promise<District> => {
        const district = await districtRepository.findUniqueId(id);

        if (!district) {
            throw new NotFoundException('District not found');
        }

        return district;
    },

    create: async (request: CreateDistrictRequest): Promise<District> => {
        const validatedRequest: CreateDistrictRequest = validateSchema(
            createDistrictSchema,
            request,
        );

        const district = await districtRepository.insertOnce(validatedRequest);

        return district;
    },

    createMany: async (requests: CreateDistrictRequest[]) => {
        const validatedRequests: CreateDistrictRequest[] = requests.map(
            request => validateSchema(createDistrictSchema, request),
        );

        const insertDistrictsCount =
            await districtRepository.insertMany(validatedRequests);

        return insertDistrictsCount;
    },

    update: async (
        id: number,
        request: UpdateDistrictRequest,
    ): Promise<District> => {
        const validatedRequest: UpdateDistrictRequest = validateSchema(
            updateDistrictSchema,
            request,
        );

        const district = await districtRepository.updateOnce(
            id,
            validatedRequest,
        );

        return district;
    },

    delete: async (id: number): Promise<{ id: number }> => {
        await districtService.getById(id);

        await districtRepository.deleteOnce(id);

        return { id };
    },
};
