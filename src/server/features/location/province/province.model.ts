import type { z } from 'zod';
import type {
    createProvinceSchema,
    updateProvinceSchema,
} from './province.validation';
import { type Prisma } from '@prisma/client';

export type CreateProvinceRequest = z.infer<typeof createProvinceSchema>;
export type UpdateProvinceRequest = z.infer<typeof updateProvinceSchema>;

export type ProvinceWithRelations = Prisma.ProvinceGetPayload<{
    include: {
        regencies: true;
        addresses: true;
    };
}>;
