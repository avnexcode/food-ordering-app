import { db } from '@/server/database/db';
import { type Province } from '@prisma/client';
import type {
    CreateProvinceRequest,
    ProvinceWithRelations,
    UpdateProvinceRequest,
} from './province.model';

export const provinceRepository = {
    findMany: async (): Promise<ProvinceWithRelations[] | null> => {
        const provinces = await db.province.findMany({
            include: { regencies: true, addresses: true },
        });

        return provinces;
    },
    findUniqueId: async (id: string): Promise<ProvinceWithRelations | null> => {
        const province = await db.province.findUnique({
            where: { id },
            include: { regencies: true, addresses: true },
        });

        return province;
    },

    insertOnce: async (request: CreateProvinceRequest): Promise<Province> => {
        const province = await db.province.create({
            data: { ...request },
        });

        return province;
    },

    insertMany: async (requests: CreateProvinceRequest[]): Promise<number> => {
        const provinces = await db.province.createMany({
            data: requests,
            skipDuplicates: true,
        });

        return provinces.count;
    },

    updateOnce: async (
        id: string,
        request: UpdateProvinceRequest,
    ): Promise<Province> => {
        const province = await db.province.update({
            where: { id },
            data: { ...request },
        });

        return province;
    },

    deleteOnce: async (id: string): Promise<Province> => {
        const province = await db.province.delete({ where: { id } });

        return province;
    },
};
