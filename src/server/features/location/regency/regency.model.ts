import type { z } from 'zod';
import type {
    createRegencySchema,
    updateRegencySchema,
} from './regency.validation';

export type CreateRegencyRequest = z.infer<typeof createRegencySchema>;
export type UpdateRegencyRequest = z.infer<typeof updateRegencySchema>;
