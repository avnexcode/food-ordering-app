import { db } from '@/server/database/db';
import type {
    CreateDistrictRequest,
    UpdateDistrictRequest,
} from './district.model';
import { type District } from '@prisma/client';

export const districtRepository = {
    findMany: async (): Promise<District[] | null> => {
        const districts = await db.district.findMany({
            include: { villages: true },
        });

        return districts;
    },

    findUniqueId: async (id: number): Promise<District | null> => {
        const district = await db.district.findUnique({
            where: { id },
            include: { villages: true },
        });

        return district;
    },

    insertOnce: async (request: CreateDistrictRequest): Promise<District> => {
        const district = await db.district.create({ data: { ...request } });

        return district;
    },

    insertMany: async (requests: CreateDistrictRequest[]): Promise<number> => {
        const district = await db.district.createMany({
            data: requests,
            skipDuplicates: true,
        });

        return district.count;
    },

    updateOnce: async (
        id: number,
        request: UpdateDistrictRequest,
    ): Promise<District> => {
        const district = await db.district.update({
            where: { id },
            data: { ...request },
        });

        return district;
    },

    deleteOnce: async (id: number): Promise<District> => {
        const district = await db.district.delete({ where: { id } });

        return district;
    },
};
