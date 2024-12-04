import { NotFoundException } from '@/server/lib/error.exception';
import type {
    CreateProvinceRequest,
    ProvinceWithRelations,
    UpdateProvinceRequest,
} from './province.model';
import { provinceRepository } from './province.repository';
import { validateSchema } from '@/server/service';
import {
    createProvinceSchema,
    updateProvinceSchema,
} from './province.validation';
import { type Province } from '@prisma/client';
import {
    toProvinceResponse,
    toProvinceWithRelationsResponse,
} from '@/server/utils/response/province-api-response';

export const provinceService = {
    getAll: async (): Promise<ProvinceWithRelations[]> => {
        const response = await provinceRepository.findMany();

        const provinces = response?.map(province =>
            toProvinceWithRelationsResponse(province),
        );

        return provinces!;
    },

    getById: async (id: number): Promise<ProvinceWithRelations> => {
        const province = await provinceRepository.findUniqueId(id);

        if (!province) {
            throw new NotFoundException('Province not found');
        }

        return toProvinceWithRelationsResponse(province);
    },

    create: async (request: CreateProvinceRequest): Promise<Province> => {
        const validatedRequest: CreateProvinceRequest = validateSchema(
            createProvinceSchema,
            request,
        );

        const province = await provinceRepository.insertOnce(validatedRequest);

        return toProvinceResponse(province);
    },

    createMany: async (requests: CreateProvinceRequest[]): Promise<number> => {
        const validatedRequests: CreateProvinceRequest[] = requests.map(
            request => validateSchema(createProvinceSchema, request),
        );

        const insertedProvincesCount =
            await provinceRepository.insertMany(validatedRequests);

        return insertedProvincesCount;
    },

    update: async (
        id: number,
        request: UpdateProvinceRequest,
    ): Promise<Province> => {
        const validatedRequest: UpdateProvinceRequest = validateSchema(
            updateProvinceSchema,
            request,
        );

        const province = await provinceRepository.updateOnce(
            id,
            validatedRequest,
        );

        return toProvinceResponse(province);
    },

    delete: async (id: number): Promise<{ id: number }> => {
        await provinceService.getById(id);

        await provinceRepository.deleteOnce(id);

        return { id };
    },
};
