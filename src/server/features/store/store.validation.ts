import { z } from 'zod';

export const createStoreSchema = z.object({
    name: z.string().min(1).max(100).toLowerCase(),
});

export const updateStoreSchema = createStoreSchema.partial();
