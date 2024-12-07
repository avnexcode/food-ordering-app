import { z } from 'zod';

export const createStoreFormSchema = z.object({
    name: z.string().max(100, 'Name must be 100 characters or less'),
    description: z
        .string()
        .max(65535, 'Description must be 65535 characters or less'),
    image: z
        .string()
        .max(255, 'Image URL must be 255 characters or less')
        .optional(),
    bank_name: z
        .string()
        .max(100, 'Bank name must be 100 characters or less')
        .optional(),
    bank_account: z
        .string()
        .max(50, 'Bank account must be 50 characters or less')
        .optional(),
    bank_holder: z
        .string()
        .max(100, 'Bank holder name must be 100 characters or less')
        .optional(),
});

export const updateStoreFormSchema = createStoreFormSchema.partial();

export type CreateStoreFormSchema = z.infer<typeof createStoreFormSchema>;
export type UpdateStoreFormSchema = z.infer<typeof updateStoreFormSchema>;
