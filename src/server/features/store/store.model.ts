import { type z } from 'zod';
import type { updateStoreSchema, createStoreSchema } from './store.validation';

export type CreateStoreRequest = z.infer<typeof createStoreSchema>;
export type UpdateStoreRequest = z.infer<typeof updateStoreSchema>;
