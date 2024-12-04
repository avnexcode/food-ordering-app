import type { z } from 'zod';
import type {
    createVillageSchema,
    updateVillageSchema,
} from './village.validation';
import { type Prisma } from '@prisma/client';

export type CreateVillageRequest = z.infer<typeof createVillageSchema>;
export type UpdateVillageRequest = z.infer<typeof updateVillageSchema>;

export type VillageWithRelations = Prisma.VillageGetPayload<{
    include: {
        district: true;
        addresses: true;
    };
}>;
