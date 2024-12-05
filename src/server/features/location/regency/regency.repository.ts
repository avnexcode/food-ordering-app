import { db } from '@/server/database/db';
import { type Regency } from '@prisma/client';
import type {
    CreateRegencyRequest,
    RegencyWithRelations,
    UpdateRegencyRequest,
} from './regency.model';

export const regencyRepository = {
    findMany: async (): Promise<RegencyWithRelations[] | null> => {
        const regencies = await db.regency.findMany({
            include: { province: true, districts: true, addresses: true },
        });

        return regencies;
    },

    findUniqueId: async (id: string): Promise<RegencyWithRelations | null> => {
        const regency = await db.regency.findUnique({
            where: { id },
            include: { province: true, districts: true, addresses: true },
        });

        return regency;
    },

    insertOnce: async (request: CreateRegencyRequest): Promise<Regency> => {
        const regency = await db.regency.create({ data: { ...request } });

        return regency;
    },

    insertMany: async (requests: CreateRegencyRequest[]): Promise<number> => {
        const regency = await db.regency.createMany({
            data: requests,
            skipDuplicates: true,
        });

        return regency.count;
    },

    updateOnce: async (
        id: string,
        request: UpdateRegencyRequest,
    ): Promise<Regency> => {
        const regency = await db.regency.update({
            where: { id },
            data: { ...request },
        });

        return regency;
    },

    deleteOnce: async (id: string): Promise<Regency> => {
        const regency = await db.regency.delete({ where: { id } });

        return regency;
    },
};
