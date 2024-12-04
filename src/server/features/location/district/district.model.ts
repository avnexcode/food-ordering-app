import type { z } from 'zod';
import type {
    createDistrictSchema,
    updateDistrictSchema,
} from './district.validation';
import { type Prisma } from '@prisma/client';

export type CreateDistrictRequest = z.infer<typeof createDistrictSchema>;
export type UpdateDistrictRequest = z.infer<typeof updateDistrictSchema>;

export type DistrictWithRelations = Prisma.DistrictGetPayload<{
    include: {
        regency: true;
        villages: true;
        addresses: true;
    };
}>;
