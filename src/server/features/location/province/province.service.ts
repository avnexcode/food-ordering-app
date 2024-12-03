import { NotFoundException } from '@/server/lib/error.exception';
import type {
    CreateProvinceRequest,
    UpdateProvinceRequest,
} from './province.model';
import { provinceRepository } from './province.repository';
import { validateSchema } from '@/server/service';
import {
    createProvinceSchema,
    updateProvinceSchema,
} from './province.validation';
import { type Province } from '@prisma/client';
import { toProvinceResponse } from '@/server/utils/response/province-api-response';

export const provinceService = {
    getAll: async (): Promise<Province[]> => {
        const response = await provinceRepository.findMany();

        const provinces = response?.map(province =>
            toProvinceResponse(province),
        );

        return provinces!;
    },

    getById: async (id: number): Promise<Province> => {
        const province = await provinceRepository.findUniqueId(id);

        if (!province) {
            throw new NotFoundException('Province not found');
        }

        return province;
    },

    create: async (request: CreateProvinceRequest): Promise<Province> => {
        const validatedRequest: CreateProvinceRequest = validateSchema(
            createProvinceSchema,
            request,
        );

        const province = await provinceRepository.insert(validatedRequest);

        return province;
    },

    createMany: async (requests: CreateProvinceRequest[]): Promise<number> => {
        const validatedRequests: CreateProvinceRequest[] = requests.map(
            request => validateSchema(createProvinceSchema, request),
        );

        const insertedCount =
            await provinceRepository.insertMany(validatedRequests);

        return insertedCount;
    },

    update: async (
        id: number,
        request: UpdateProvinceRequest,
    ): Promise<Province> => {
        const validatedRequest: UpdateProvinceRequest = validateSchema(
            updateProvinceSchema,
            request,
        );

        const province = await provinceRepository.update(id, validatedRequest);

        return province;
    },

    delete: async (id: number): Promise<{ id: number }> => {
        await provinceService.getById(id);

        await provinceRepository.delete(id);

        return { id };
    },
};
