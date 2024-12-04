import { db } from '@/server/database/db';
import { type Province } from '@prisma/client';
import type {
    CreateProvinceRequest,
    UpdateProvinceRequest,
} from './province.model';

export const provinceRepository = {
    findMany: async (): Promise<Province[] | null> => {
        const provinces = await db.province.findMany({
            include: { regencies: true },
        });

        return provinces;
    },
    findUniqueId: async (id: number): Promise<Province | null> => {
        const province = await db.province.findUnique({
            where: { id },
            include: { regencies: true },
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
        id: number,
        request: UpdateProvinceRequest,
    ): Promise<Province> => {
        const province = await db.province.update({
            where: { id },
            data: { ...request },
        });

        return province;
    },

    deleteOnce: async (id: number): Promise<Province> => {
        const province = await db.province.delete({ where: { id } });

        return province;
    },
};
