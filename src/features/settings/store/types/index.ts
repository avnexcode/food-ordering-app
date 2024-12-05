import { z } from 'zod';

export const createStoreFormSchema = z.object({
    name: z.string(),
});

export const updateStoreFormSchema = z.object({
    name: z.string(),
});

export type CreateStoreFormSchema = z.infer<typeof createStoreFormSchema>;
export type UpdateStoreFormSchema = z.infer<typeof updateStoreFormSchema>;
