import { db } from '@/server/database/db';
import type {
    CreateDistrictRequest,
    DistrictWithRelations,
    UpdateDistrictRequest,
} from './district.model';
import { type District } from '@prisma/client';

export const districtRepository = {
    findMany: async (): Promise<DistrictWithRelations[] | null> => {
        const districts = await db.district.findMany({
            include: { regency: true, villages: true, addresses: true },
        });

        return districts;
    },

    findUniqueId: async (id: string): Promise<DistrictWithRelations | null> => {
        const district = await db.district.findUnique({
            where: { id },
            include: { regency: true, villages: true, addresses: true },
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
        id: string,
        request: UpdateDistrictRequest,
    ): Promise<District> => {
        const district = await db.district.update({
            where: { id },
            data: { ...request },
        });

        return district;
    },

    deleteOnce: async (id: string): Promise<District> => {
        const district = await db.district.delete({ where: { id } });

        return district;
    },
};
