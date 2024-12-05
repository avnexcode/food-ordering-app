import { type Village } from '@prisma/client';
import type {
    CreateVillageRequest,
    UpdateVillageRequest,
    VillageWithRelations,
} from './village.model';
import { db } from '@/server/database/db';

export const villageRepository = {
    findMany: async (): Promise<VillageWithRelations[] | null> => {
        const villages = await db.village.findMany({
            include: { district: true, addresses: true },
        });

        return villages;
    },

    findUniqueId: async (id: string): Promise<VillageWithRelations | null> => {
        const village = await db.village.findUnique({
            where: { id },
            include: { district: true, addresses: true },
        });

        return village;
    },

    insertOnce: async (request: CreateVillageRequest): Promise<Village> => {
        const village = await db.village.create({ data: { ...request } });

        return village;
    },

    insertMany: async (requests: CreateVillageRequest[]): Promise<number> => {
        const village = await db.village.createMany({
            data: requests,
            skipDuplicates: true,
        });

        return village.count;
    },

    updateOnce: async (
        id: string,
        request: UpdateVillageRequest,
    ): Promise<Village> => {
        const village = await db.village.update({
            where: { id },
            data: { ...request },
        });

        return village;
    },

    deleteOnce: async (id: string): Promise<Village> => {
        const village = await db.village.delete({ where: { id } });

        return village;
    },
};
