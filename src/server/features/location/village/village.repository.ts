import { type Village } from '@prisma/client';
import type {
    CreateVillageRequest,
    UpdateVillageRequest,
} from './village.model';
import { db } from '@/server/database/db';

export const villageRepository = {
    findMany: async (): Promise<Village[] | null> => {
        const villages = await db.village.findMany();

        return villages;
    },

    findUniqueId: async (id: number): Promise<Village | null> => {
        const village = await db.village.findUnique({ where: { id } });

        return village;
    },

    insert: async (request: CreateVillageRequest): Promise<Village> => {
        const village = await db.village.create({ data: { ...request } });

        return village;
    },

    update: async (
        id: number,
        request: UpdateVillageRequest,
    ): Promise<Village> => {
        const village = await db.village.update({
            where: { id },
            data: { ...request },
        });

        return village;
    },

    delete: async (id: number): Promise<Village> => {
        const village = await db.village.delete({ where: { id } });

        return village;
    },
};
