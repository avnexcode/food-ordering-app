import type { z } from 'zod';
import type {
    createRegencySchema,
    updateRegencySchema,
} from './regency.validation';
import { type Prisma } from '@prisma/client';

export type CreateRegencyRequest = z.infer<typeof createRegencySchema>;
export type UpdateRegencyRequest = z.infer<typeof updateRegencySchema>;

export type RegencyWithRelations = Prisma.RegencyGetPayload<{
    include: {
        province: true;
        districts: true;
        addresses: true;
    };
}>;
