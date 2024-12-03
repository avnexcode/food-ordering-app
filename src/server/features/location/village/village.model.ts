import type { z } from 'zod';
import type {
    createVillageSchema,
    updateVillageSchema,
} from './village.validation';

export type CreateVillageRequest = z.infer<typeof createVillageSchema>;
export type UpdateVillageRequest = z.infer<typeof updateVillageSchema>;
