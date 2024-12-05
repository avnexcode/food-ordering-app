import { type District } from '@prisma/client';
import type {
    CreateDistrictRequest,
    DistrictWithRelations,
    UpdateDistrictRequest,
} from './district.model';
import { districtRepository } from './district.repository';
import { NotFoundException } from '@/server/lib/error.exception';
import { validateSchema } from '@/server/service';
import {
    createDistrictSchema,
    updateDistrictSchema,
} from './district.validation';
import {
    toDistrictResponse,
    toDistrictWithRelationsResponse,
} from '@/server/utils/response/district-api-response';

export const districtService = {
    getAll: async (): Promise<DistrictWithRelations[]> => {
        const response = await districtRepository.findMany();

        const districts = response?.map(district =>
            toDistrictWithRelationsResponse(district),
        );

        return districts!;
    },

    getById: async (id: string): Promise<DistrictWithRelations> => {
        const district = await districtRepository.findUniqueId(id);

        if (!district) {
            throw new NotFoundException('District not found');
        }

        return toDistrictWithRelationsResponse(district);
    },

    create: async (request: CreateDistrictRequest): Promise<District> => {
        const validatedRequest: CreateDistrictRequest = validateSchema(
            createDistrictSchema,
            request,
        );

        const district = await districtRepository.insertOnce(validatedRequest);

        return toDistrictResponse(district);
    },

    createMany: async (requests: CreateDistrictRequest[]): Promise<number> => {
        const validatedRequests: CreateDistrictRequest[] = requests.map(
            request => validateSchema(createDistrictSchema, request),
        );

        const insertDistrictsCount =
            await districtRepository.insertMany(validatedRequests);

        return insertDistrictsCount;
    },

    update: async (
        id: string,
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

        return toDistrictResponse(district);
    },

    delete: async (id: string): Promise<{ id: string }> => {
        await districtService.getById(id);

        await districtRepository.deleteOnce(id);

        return { id };
    },
};
