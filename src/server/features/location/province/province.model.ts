import type { z } from 'zod';
import type {
    createProvinceSchema,
    updateProvinceSchema,
} from './province.validation';

export type CreateProvinceRequest = z.infer<typeof createProvinceSchema>;
export type UpdateProvinceRequest = z.infer<typeof updateProvinceSchema>;
