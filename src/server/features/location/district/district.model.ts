import type { z } from 'zod';
import type {
    createDistrictSchema,
    updateDistrictSchema,
} from './district.validation';

export type CreateDistrictRequest = z.infer<typeof createDistrictSchema>;
export type UpdateDistrictRequest = z.infer<typeof updateDistrictSchema>;
