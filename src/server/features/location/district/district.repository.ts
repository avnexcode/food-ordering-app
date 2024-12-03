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
    insert: async (request: CreateDistrictRequest): Promise<District> => {
        const district = await db.district.create({ data: { ...request } });

        return district;
    },
    update: async (
        id: number,
        request: UpdateDistrictRequest,
    ): Promise<District> => {
        const district = await db.district.update({
            where: { id },
            data: { ...request },
        });

        return district;
    },
    delete: async (id: number): Promise<District> => {
        const district = await db.district.delete({ where: { id } });

        return district;
    },
};
